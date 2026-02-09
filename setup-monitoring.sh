#!/bin/bash

# Cloud Monitoring Setup Script for dudu-studio-website
# Run this script after deployment to set up monitoring alerts

PROJECT_ID="louis-460302"
SERVICE_NAME="dudu-studio-website"
REGION="asia-east1"
NOTIFICATION_EMAIL="info@dudustudio.monster"

echo "Setting up Cloud Monitoring for $SERVICE_NAME..."

# Create notification channel (email)
echo "Creating email notification channel..."
CHANNEL_ID=$(gcloud alpha monitoring channels create \
  --display-name="DuDu Website Alerts" \
  --type=email \
  --channel-labels=email_address=$NOTIFICATION_EMAIL \
  --project=$PROJECT_ID \
  --format="value(name)" 2>/dev/null)

if [ -z "$CHANNEL_ID" ]; then
  echo "Notification channel may already exist. Fetching existing channel..."
  CHANNEL_ID=$(gcloud alpha monitoring channels list \
    --project=$PROJECT_ID \
    --filter="displayName='DuDu Website Alerts'" \
    --format="value(name)" 2>/dev/null | head -1)
fi

echo "Notification Channel: $CHANNEL_ID"

# Create uptime check
echo "Creating uptime check..."
gcloud monitoring uptime create \
  --display-name="DuDu Website Uptime Check" \
  --resource-type="cloud-run-revision" \
  --resource-labels="project_id=$PROJECT_ID,service_name=$SERVICE_NAME,location=$REGION" \
  --http-check-path="/" \
  --http-check-port=443 \
  --period=60 \
  --timeout=10 \
  --project=$PROJECT_ID 2>/dev/null || echo "Uptime check may already exist"

# Create alerting policy for high latency
echo "Creating latency alert policy..."
cat > /tmp/latency-policy.json << EOF
{
  "displayName": "DuDu Website - High Latency Alert",
  "conditions": [
    {
      "displayName": "Cloud Run Request Latency > 2s",
      "conditionThreshold": {
        "filter": "resource.type=\"cloud_run_revision\" AND resource.labels.service_name=\"$SERVICE_NAME\" AND metric.type=\"run.googleapis.com/request_latencies\"",
        "aggregations": [
          {
            "alignmentPeriod": "300s",
            "perSeriesAligner": "ALIGN_PERCENTILE_99"
          }
        ],
        "comparison": "COMPARISON_GT",
        "thresholdValue": 2000,
        "duration": "300s"
      }
    }
  ],
  "combiner": "OR",
  "notificationChannels": ["$CHANNEL_ID"]
}
EOF

gcloud alpha monitoring policies create \
  --policy-from-file=/tmp/latency-policy.json \
  --project=$PROJECT_ID 2>/dev/null || echo "Latency policy may already exist"

# Create alerting policy for errors
echo "Creating error rate alert policy..."
cat > /tmp/error-policy.json << EOF
{
  "displayName": "DuDu Website - High Error Rate Alert",
  "conditions": [
    {
      "displayName": "Cloud Run Error Rate > 5%",
      "conditionThreshold": {
        "filter": "resource.type=\"cloud_run_revision\" AND resource.labels.service_name=\"$SERVICE_NAME\" AND metric.type=\"run.googleapis.com/request_count\" AND metric.labels.response_code_class!=\"2xx\"",
        "aggregations": [
          {
            "alignmentPeriod": "300s",
            "perSeriesAligner": "ALIGN_RATE"
          }
        ],
        "comparison": "COMPARISON_GT",
        "thresholdValue": 0.05,
        "duration": "300s"
      }
    }
  ],
  "combiner": "OR",
  "notificationChannels": ["$CHANNEL_ID"]
}
EOF

gcloud alpha monitoring policies create \
  --policy-from-file=/tmp/error-policy.json \
  --project=$PROJECT_ID 2>/dev/null || echo "Error policy may already exist"

# Cleanup
rm -f /tmp/latency-policy.json /tmp/error-policy.json

echo ""
echo "============================================"
echo "Cloud Monitoring Setup Complete!"
echo "============================================"
echo ""
echo "Alerts configured:"
echo "  1. Uptime Check - Every 60 seconds"
echo "  2. Latency Alert - When P99 > 2 seconds"
echo "  3. Error Rate Alert - When error rate > 5%"
echo ""
echo "Notifications will be sent to: $NOTIFICATION_EMAIL"
echo ""
echo "View dashboard: https://console.cloud.google.com/monitoring?project=$PROJECT_ID"
