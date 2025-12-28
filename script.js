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
  // Replace with actual Play Store URL
  const playStoreUrl =
    'https://play.google.com/store/apps/details?id=vip.bachngocsach.app';

  // Try to open Play Store, fallback to URL if not on Android
  window.location.href = playStoreUrl;
}

// Add smooth scroll behavior
document.addEventListener('DOMContentLoaded', function () {
  // Add any initialization code here if needed
  console.log('Tiên Vực landing page loaded');
});
