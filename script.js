// Handle iOS app download
function handleIOSClick(event) {
  event.preventDefault();
  // Replace with actual App Store URL
  const appStoreUrl =
    'https://apps.apple.com/vn/app/b%E1%BA%A1ch-ng%E1%BB%8Dc-s%C3%A1ch/id1672932706';
  window.location.href = appStoreUrl;
}

// Handle Android app download
function handleAndroidClick(event) {
  event.preventDefault();
  const apkUrl = '/file/bachngocsach-app.apk';
  window.location.href = apkUrl;
}

// Add smooth scroll behavior
document.addEventListener('DOMContentLoaded', function () {
  // Add any initialization code here if needed
  console.log('Tiên Vực landing page loaded');
});
