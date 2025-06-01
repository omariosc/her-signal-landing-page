"use client"

import { useState } from 'react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import DownloadButtons from './DownloadButtons'

const prototypeScreens = [
  {
    id: 1,
    title: "Discreet App Launch",
    description: "App disguised as 'Notes' with multiple trigger methods",
    screen: (
      <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 h-96 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">9:41</div>
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-black dark:bg-white rounded-full"></div>
            <div className="w-4 h-2 border border-black dark:border-white rounded-sm"></div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 flex-1">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center mb-1">
              <span className="text-white text-xl">📝</span>
            </div>
            <span className="text-xs text-gray-700 dark:text-gray-300">Notes</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center mb-1">
              <span className="text-white text-xl">📅</span>
            </div>
            <span className="text-xs text-gray-700 dark:text-gray-300">Calendar</span>
          </div>
        </div>
        <div className="text-xs text-center text-gray-500 mt-4">
          Tap Notes, long-press volume, or voice command
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Incoming Call Interface",
    description: "AI contact 'Maya' calling - looks like a real video call",
    screen: (
      <div className="bg-black rounded-2xl p-6 h-96 flex flex-col text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-black"></div>
        <div className="relative z-10 flex flex-col items-center flex-1 justify-center">
          <div className="text-sm mb-2 opacity-80">Incoming video call</div>
          <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center mb-4">
            <span className="text-3xl">👩🏻‍💼</span>
          </div>
          <h3 className="text-2xl font-light mb-2">Maya</h3>
          <div className="text-sm opacity-60 mb-8">Safety Companion</div>
          
          <div className="flex space-x-12 mt-auto">
            <button className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-2xl">📞</span>
            </button>
            <button className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-2xl">📞</span>
            </button>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Active AI Video Call",
    description: "Natural conversation with AI avatar - deters perpetrators",
    screen: (
      <div className="bg-gray-900 rounded-2xl p-4 h-96 flex flex-col text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-sm">👩🏻‍💼</span>
            </div>
            <span className="text-sm">Maya</span>
          </div>
          <div className="text-xs bg-red-600 px-2 py-1 rounded">● 02:34</div>
        </div>
        
        <div className="flex-1 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl flex items-center justify-center mb-4">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center mb-3 mx-auto">
              <span className="text-2xl">👩🏻‍💼</span>
            </div>
            <div className="text-sm opacity-80">
              &quot;How&apos;s your evening walk going?<br/>The weather looks nice tonight.&quot;
            </div>
          </div>
        </div>
        
        <div className="flex justify-center space-x-6">
          <button className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
            <span>🔇</span>
          </button>
          <button className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
            <span>📞</span>
          </button>
          <button className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
            <span>📹</span>
          </button>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Background Monitoring",
    description: "GPS tracking, recording, emergency protocols activated silently",
    screen: (
      <div className="bg-gray-900 rounded-2xl p-4 h-96 flex flex-col text-white relative">
        {/* Call interface overlay */}
        <div className="absolute inset-4 bg-gray-800/50 rounded-xl border border-purple-500/30"></div>
        
        {/* Background indicators */}
        <div className="absolute top-6 right-6 flex flex-col items-end space-y-2 z-20">
          <div className="flex items-center space-x-1 text-xs bg-green-600/80 px-2 py-1 rounded">
            <span>📍</span>
            <span>GPS Active</span>
          </div>
          <div className="flex items-center space-x-1 text-xs bg-blue-600/80 px-2 py-1 rounded">
            <span>🎙️</span>
            <span>Recording</span>
          </div>
          <div className="flex items-center space-x-1 text-xs bg-orange-600/80 px-2 py-1 rounded">
            <span>🛡️</span>
            <span>Monitoring</span>
          </div>
        </div>
        
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center mb-3 mx-auto">
              <span className="text-xl">👩🏻‍💼</span>
            </div>
            <div className="text-sm opacity-60">
              Maya is keeping you safe...
            </div>
          </div>
        </div>
        
        <div className="relative z-10 text-xs text-center opacity-40">
          Evidence capture • Emergency protocols ready
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Emergency Escalation",
    description: "Discreet emergency options without obvious alerting",
    screen: (
      <div className="bg-gray-900 rounded-2xl p-4 h-96 flex flex-col text-white">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center mb-3 mx-auto">
            <span className="text-xl">👩🏻‍💼</span>
          </div>
          <div className="text-sm">Maya • Safety Check</div>
        </div>
        
        <div className="flex-1 space-y-4">
          <button className="w-full bg-green-600/20 border border-green-600/50 rounded-lg p-4 text-left">
            <div className="font-medium text-green-400">I&apos;m okay</div>
            <div className="text-xs opacity-60">End call and delete recordings</div>
          </button>
          
          <button className="w-full bg-blue-600/20 border border-blue-600/50 rounded-lg p-4 text-left">
            <div className="font-medium text-blue-400">Stay with me</div>
            <div className="text-xs opacity-60">Continue monitoring</div>
          </button>
          
          <button className="w-full bg-red-600/20 border border-red-600/50 rounded-lg p-4 text-left">
            <div className="font-medium text-red-400">I need help</div>
            <div className="text-xs opacity-60">Alert contacts & emergency services</div>
          </button>
        </div>
        
        <div className="text-xs text-center opacity-40 mt-4">
          Tap any option or use voice command
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "Safe Exit",
    description: "Returns to cover screen with post-session options",
    screen: (
      <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 h-96 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm text-gray-600 dark:text-gray-400">9:47</div>
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-black dark:bg-white rounded-full"></div>
            <div className="w-4 h-2 border border-black dark:border-white rounded-sm"></div>
          </div>
        </div>
        
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center mb-2 mx-auto">
            <span className="text-white text-xl">📝</span>
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300">Notes</div>
        </div>
        
        {/* Hidden notification */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 mb-4">
          <div className="text-xs font-medium text-blue-800 dark:text-blue-200 mb-2">
            Session Complete ✓
          </div>
          <div className="text-xs text-blue-600 dark:text-blue-300 space-y-1">
            <div>• Keep recording?</div>
            <div>• Report this location?</div>
            <div>• Review safety settings?</div>
          </div>
        </div>
        
        <div className="text-xs text-center text-gray-500 mt-auto">
          Your safety session is complete. You&apos;re in control.
        </div>
      </div>
    )
  }
]

export default function AppPrototype() {
  const [currentScreen, setCurrentScreen] = useState(0)

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">App Prototype Preview</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Experience the HerSignal user journey - from discreet activation to safe exit
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Phone mockup */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-80 h-[640px] bg-black rounded-[3rem] p-4 shadow-2xl">
              <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[2.5rem] overflow-hidden">
                {prototypeScreens[currentScreen].screen}
              </div>
            </div>
          </div>
        </div>

        {/* Controls and info */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              {prototypeScreens[currentScreen].title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {prototypeScreens[currentScreen].description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {prototypeScreens.map((_, index) => (
                <Button
                  key={index}
                  variant={currentScreen === index ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentScreen(index)}
                  className="w-8 h-8 p-0"
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold mb-3">User Journey Steps:</h4>
            <div className="space-y-2 text-sm mb-6">
              {prototypeScreens.map((screen, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 ${
                    currentScreen === index ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    currentScreen === index ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'
                  }`}>
                    {index + 1}
                  </span>
                  <span>{screen.title}</span>
                </div>
              ))}
            </div>
            
            <div className="border-t border-border pt-6">
              <h4 className="font-semibold mb-4 text-center">Download the App</h4>
              <DownloadButtons comingSoon={true} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}