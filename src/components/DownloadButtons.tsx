"use client"

export function AppStoreButton({ comingSoon = true }: { comingSoon?: boolean }) {
  return (
    <div className="relative inline-block">
      <img 
        src="/app-store-badge.png" 
        alt={comingSoon ? "Coming Soon on the App Store" : "Download on the App Store"}
        className="h-[40px] w-auto transition-opacity hover:opacity-80"
      />
      {comingSoon && (
        <div className="absolute inset-0 bg-gray-800/70 rounded-md flex items-center justify-center">
          <span className="text-xs text-white font-medium">Coming Soon</span>
        </div>
      )}
    </div>
  )
}

export function GooglePlayButton({ comingSoon = true }: { comingSoon?: boolean }) {
  return (
    <div className="relative inline-block">
      <img 
        src="/google-play-badge.png" 
        alt={comingSoon ? "Coming Soon to Google Play" : "Get it on Google Play"}
        className="h-[40px] w-auto transition-opacity hover:opacity-80"
      />
      {comingSoon && (
        <div className="absolute inset-0 bg-gray-800/70 rounded-md flex items-center justify-center">
          <span className="text-xs text-white font-medium">Coming Soon</span>
        </div>
      )}
    </div>
  )
}

export default function DownloadButtons({ comingSoon = true }: { comingSoon?: boolean }) {
  return (
    <div className="flex flex-row gap-4 items-center justify-center">
      <AppStoreButton comingSoon={comingSoon} />
      <GooglePlayButton comingSoon={comingSoon} />
    </div>
  )
}