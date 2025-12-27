// Handle iOS app download
function handleIOSClick(event) {
    event.preventDefault();
    // Replace with actual App Store URL
    const appStoreUrl = 'https://apps.apple.com/app/your-app-id';
    
    // Try to open App Store, fallback to URL if not on iOS
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        window.location.href = appStoreUrl;
    } else {
        alert('Vui lòng truy cập từ thiết bị iOS để tải ứng dụng');
        // window.open(appStoreUrl, '_blank');
    }
}

// Handle Android app download
function handleAndroidClick(event) {
    event.preventDefault();
    // Replace with actual Play Store URL
    const playStoreUrl = 'https://play.google.com/store/apps/details?id=your.app.id';
    
    // Try to open Play Store, fallback to URL if not on Android
    if (/Android/.test(navigator.userAgent)) {
        window.location.href = playStoreUrl;
    } else {
        window.open(playStoreUrl, '_blank');
    }
}

// Add smooth scroll behavior
document.addEventListener('DOMContentLoaded', function() {
    // Add any initialization code here if needed
    console.log('Tiên Vực landing page loaded');
});

