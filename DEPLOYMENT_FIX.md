# AWS Amplify Deployment Size Fix

## Current Situation
- **Amplify limit**: 230MB
- **Current build**: 253MB (failing)
- **Local .next**: 20MB
- **Public folder**: 87MB
- **Videos**: 44MB
- **Images**: 40MB

## Root Cause
AWS Amplify deploys both `.next` folder AND `public/` folder. Your public folder contains:
- `achievrDemo.mp4` - 44MB
- Multiple large images - 40MB total
- `earth.bin` - 1.8MB

## Immediate Solutions

### Option 1: Move Video to External Hosting (RECOMMENDED)
1. Upload `public/Videos/achievrDemo.mp4` to YouTube, Vimeo, or AWS S3
2. Update your code to use the external URL
3. Delete the local video file

### Option 2: Use Cloudinary for Images (FREE)
1. Sign up at https://cloudinary.com (free tier: 25GB storage, 25GB bandwidth/month)
2. Upload your images
3. Replace local image paths with Cloudinary URLs
4. Cloudinary auto-optimizes and serves WebP/AVIF

### Option 3: Compress Video Locally
```bash
# Requires ffmpeg
ffmpeg -i public/Videos/achievrDemo.mp4 -vcodec h264 -crf 28 -preset faster public/Videos/achievrDemo-compressed.mp4
```

## Files to Move to CDN/External Hosting

### Large Images (Move to Cloudinary):
- interiors2.jpg - 7.1MB
- interiors4.jpg - 2.9MB
- interiors5.jpg - 2.5MB
- interiors1.jpg - 2.0MB
- Avatar4.jpg - 2.4MB
- Avatar2.jpg - 2.3MB
- Avatar1.jpg - 1.2MB
- leaves.jpg - 2.9MB
- peony.jpg - 1.3MB
- blossom.jpg - 1.2MB

### Converted PNG→JPG (already done):
- MoviesGPT1-5.jpg
- FoodieImage1-3.jpg
- MindCraftWellness.jpg

## Quick Win
Delete the video temporarily to get under the limit:
```bash
mkdir -p ../assets-backup
mv public/Videos/achievrDemo.mp4 ../assets-backup/
```

This alone will reduce your deployment to ~209MB (under the 230MB limit).
