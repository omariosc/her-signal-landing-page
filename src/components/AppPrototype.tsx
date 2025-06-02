"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import DownloadButtons from "./DownloadButtons";
import Image from "next/image";

const prototypeScreens = [
  {
    id: 0,
    title: "Start Call Discretely",
    description:
      "Using various accessibility options which you prefer (e.g. triple-tap power button), send a request to our server which will send you a fake call.",
    screen: (
      <div className="bg-white rounded-2xl p-6 h-96 flex items-center justify-center">
        <Image
          src="/0-discrete.svg"
          alt="Start Call Discretely"
          className="w-full h-full object-contain"
          width={800}
          height={600}
        />
      </div>
    ),
  },
  {
    id: 1,
    title: "Minimal Data for Profile",
    description:
      "We only use your data for emergency situations. Everything is completely encrypted and constant reviewed by third-party security experts.",
    screen: (
      <div className="bg-white rounded-2xl p-6 h-96 flex items-center justify-center">
        <Image
          src="/1a-profile.svg"
          alt="Minimal Data for Profile"
          className="w-full h-full object-contain"
          width={800}
          height={600}
        />
      </div>
    ),
  },
  {
    id: 2,
    title: "Minimal Data for Profile",
    description:
      "Intelligently send repeated subtle and hidden notifications and calls when we think you need it the most. Choose to dismiss, or take a fake call when you feel like you need it.",
    screen: (
      <div className="bg-white rounded-2xl p-6 h-96 flex items-center justify-center">
        <Image
          src="/1b-minimal-data.svg"
          alt="Minimal Data for Profile - Intelligent Notifications"
          className="w-full h-full object-contain"
          width={800}
          height={600}
        />
      </div>
    ),
  },
  {
    id: 3,
    title: "Set Up Emergency Contact",
    description: "Automatically call them in an emergency",
    screen: (
      <div className="bg-white rounded-2xl p-6 h-96 flex items-center justify-center">
        <Image
          src="/2a-emergency-setup.svg"
          alt="Set Up Emergency Contact"
          className="w-full h-full object-contain"
          width={800}
          height={600}
        />
      </div>
    ),
  },
  {
    id: 4,
    title: "Set Up Emergency Contact",
    description: "Automatically call them in an emergency",
    screen: (
      <div className="bg-white rounded-2xl p-6 h-96 flex items-center justify-center">
        <Image
          src="/2b-emergency-contacts.svg"
          alt="Set Up Emergency Contact - Contacts"
          className="w-full h-full object-contain"
          width={800}
          height={600}
        />
      </div>
    ),
  },
  {
    id: 5,
    title: "Train your app",
    description: "Using AI to replicate the voice of someone you know",
    screen: (
      <div className="bg-white rounded-2xl p-6 h-96 flex items-center justify-center">
        <Image
          src="/3a-train.svg"
          alt="Train your app - Voice Replication"
          className="w-full h-full object-contain"
          width={800}
          height={600}
        />
      </div>
    ),
  },
  {
    id: 6,
    title: "Train your app",
    description: "Data stays on your device, focusing on security and privacy",
    screen: (
      <div className="bg-white rounded-2xl p-6 h-96 flex items-center justify-center">
        <Image
          src="/3b-recording.svg"
          alt="Train your app - Privacy Focused"
          className="w-full h-full object-contain"
          width={800}
          height={600}
        />
      </div>
    ),
  },
  {
    id: 7,
    title: "Habitual Reminders",
    description:
      "Set reminders from when you feel you may want intermediate opportunities to take a fake call, reducing the cognitive burden",
    screen: (
      <div className="bg-white rounded-2xl p-6 h-96 flex items-center justify-center">
        <Image
          src="/4-reminders.svg"
          alt="Habitual Reminders"
          className="w-full h-full object-contain"
          width={800}
          height={600}
        />
      </div>
    ),
  },
  {
    id: 8,
    title: "🌟 Share Your Experience",
    description:
      "Help us create a safer world together. Your thoughtful feedback helps researchers and advocates build better support systems for women's safety.",
    screen: (
      <div className="bg-white rounded-2xl p-6 h-96 flex items-center justify-center">
        <Image
          src="/5-feedback.svg"
          alt="Feedback Survey"
          className="w-full h-full object-contain"
          width={800}
          height={600}
        />
      </div>
    ),
  },
];

export default function AppPrototype() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [disableTransitions, setDisableTransitions] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0])); // Start with first image loaded
  const [pendingScreen, setPendingScreen] = useState<number | null>(null);

  const getImagePath = useCallback((index: number) => {
    return `/${
      index === 0
        ? "0-discrete"
        : index === 1
        ? "1a-profile"
        : index === 2
        ? "1b-minimal-data"
        : index === 3
        ? "2a-emergency-setup"
        : index === 4
        ? "2b-emergency-contacts"
        : index === 5
        ? "3a-train"
        : index === 6
        ? "3b-recording"
        : index === 7
        ? "4-reminders"
        : "5-feedback"
    }.svg`;
  }, []);

  const preloadImage = useCallback((index: number) => {
    if (loadedImages.has(index)) return;

    const img = new window.Image();
    img.src = getImagePath(index);
    img.onload = () => {
      setLoadedImages(prev => new Set([...prev, index]));
      // If this was a pending screen change, execute it now
      if (pendingScreen === index) {
        setCurrentScreen(index);
        setPendingScreen(null);
      }
    };
  }, [loadedImages, getImagePath, pendingScreen]);

  const preloadAdjacentImages = useCallback((index: number) => {
    const prevIndex = (index - 1 + prototypeScreens.length) % prototypeScreens.length;
    const nextIndex = (index + 1) % prototypeScreens.length;
    preloadImage(prevIndex);
    preloadImage(nextIndex);
  }, [preloadImage]);

  // Preload all images on mobile when component mounts
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      prototypeScreens.forEach((_, index) => {
        preloadImage(index);
      });
    } else {
      // On desktop, preload adjacent images initially
      preloadAdjacentImages(0);
    }
  }, [preloadAdjacentImages, preloadImage]);

  // Preload adjacent images when current screen changes
  useEffect(() => {
    preloadAdjacentImages(currentScreen);
  }, [currentScreen, preloadAdjacentImages]);

  const nextScreen = () => {
    if (isTransitioning) return;
    const nextIndex = (currentScreen + 1) % prototypeScreens.length;
    if (loadedImages.has(nextIndex)) {
      setIsTransitioning(true);
      setCurrentScreen(nextIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 400);
      preloadAdjacentImages(nextIndex);
    } else {
      preloadImage(nextIndex);
      setPendingScreen(nextIndex);
    }
  };

  const prevScreen = () => {
    if (isTransitioning) return;
    const prevIndex = (currentScreen - 1 + prototypeScreens.length) % prototypeScreens.length;
    if (loadedImages.has(prevIndex)) {
      setIsTransitioning(true);
      setCurrentScreen(prevIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 400);
      preloadAdjacentImages(prevIndex);
    } else {
      preloadImage(prevIndex);
      setPendingScreen(prevIndex);
    }
  };

  const jumpToScreen = (index: number) => {
    if (loadedImages.has(index)) {
      setDisableTransitions(true);
      setCurrentScreen(index);
      setTimeout(() => {
        setDisableTransitions(false);
      }, 50);
      preloadAdjacentImages(index);
    } else {
      preloadImage(index);
      setPendingScreen(index);
    }
  };

  const getPrevIndex = () =>
    (currentScreen - 1 + prototypeScreens.length) % prototypeScreens.length;
  const getNextIndex = () => (currentScreen + 1) % prototypeScreens.length;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">App Prototype Preview</h2>
        <p className="text-gray-600">
          Experience the HerSignal user journey - from discreet activation to
          safe exit
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-14 md:gap-24 items-start">
        {/* Full screen SVG carousel */}
        <div className="flex flex-col items-center">
          <div className="relative w-80 h-[600px] mb-6 overflow-visible">
            {/* All screens - positions and opacity change simultaneously */}
            {prototypeScreens.map((screen, index) => {
              const isCurrentScreen = index === currentScreen;
              const isPrevScreen = index === getPrevIndex();
              const isNextScreen = index === getNextIndex();

              // Don't render screens that aren't visible
              if (!isCurrentScreen && !isPrevScreen && !isNextScreen)
                return null;

              let position = "";
              let opacity = "";
              let zIndex = "";

              if (isCurrentScreen) {
                // Current screen - center position, always 1.0 opacity
                position = "left-0";
                opacity = "opacity-100";
                zIndex = "z-20";
              } else if (isPrevScreen) {
                // Previous screen - left position, always 0.5 opacity
                position = "left-[-80px]";
                opacity = "opacity-50";
                zIndex = "z-10";
              } else if (isNextScreen) {
                // Next screen - right position, always 0.5 opacity
                position = "left-[80px]";
                opacity = "opacity-50";
                zIndex = "z-10";
              }

              return (
                <div
                  key={index}
                  className={`absolute w-80 h-[600px] p-4 ${
                    isTransitioning || disableTransitions
                      ? "transition-none"
                      : "transition-opacity duration-200 ease-in-out"
                  } ${position} ${opacity} ${zIndex} ${
                    !isCurrentScreen ? "hidden md:block" : ""
                  } ${!isCurrentScreen ? "cursor-pointer" : ""}`}
                  onClick={() => !isCurrentScreen && jumpToScreen(index)}
                >
                  <Image
                    src={getImagePath(index)}
                    alt={screen.title}
                    className="w-full h-full object-contain"
                    width={800}
                    height={600}
                    priority={index === 0}
                  />
                </div>
              );
            })}
          </div>

          {/* Navigation arrows underneath */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevScreen}
              onMouseEnter={() => preloadImage(getPrevIndex())}
              className="w-9 h-9 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform text-gray-700 !cursor-pointer"
            >
              ←
            </button>
            <span className="text-sm text-gray-500 px-4">
              {currentScreen + 1} of {prototypeScreens.length}
            </span>
            <button
              onClick={nextScreen}
              onMouseEnter={() => preloadImage(getNextIndex())}
              className="w-9 h-9 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform text-gray-700 !cursor-pointer"
            >
              →
            </button>
          </div>
        </div>

        {/* Controls and info */}
        <div className="space-y-[21px] -mt-6">
          {/* Mobile navigation buttons - shown above screen on small screens */}
          <div className="block md:hidden mb-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {prototypeScreens.map((_, index) => {
                if (index === 2 || index === 4 || index === 6) {
                  return null;
                }
                return (
                  <Button
                    key={index}
                    variant={currentScreen === index ? "default" : "outline"}
                    size="sm"
                    onClick={() => jumpToScreen(index)}
                    onMouseEnter={() => preloadImage(index)}
                    className="w-8 h-8 p-0"
                  >
                    {index === 3
                      ? 3
                      : index === 5
                      ? 4
                      : index === 7
                      ? 5
                      : index === 8
                      ? 6
                      : index + 1}
                  </Button>
                );
              })}
            </div>
          </div>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              {prototypeScreens[currentScreen].title}
            </h3>
            <p className="text-gray-600 mb-4">
              {prototypeScreens[currentScreen].description}
            </p>

            {/* Desktop navigation buttons */}
            <div className="hidden md:flex flex-wrap gap-2">
              {prototypeScreens.map((_, index) => {
                if (index === 2 || index === 4 || index === 6) {
                  return null; // Skip these indices
                }
                return (
                  <Button
                    key={index}
                    variant={currentScreen === index ? "default" : "outline"}
                    size="sm"
                    onClick={() => jumpToScreen(index)}
                    onMouseEnter={() => preloadImage(index)}
                    className="w-8 h-8 p-0"
                  >
                    {index === 3
                      ? 3
                      : index === 5
                      ? 4
                      : index === 7
                      ? 5
                      : index === 8
                      ? 6
                      : index + 1}
                  </Button>
                );
              })}
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold mb-3">User Journey Steps:</h4>
            <div className="space-y-2 text-sm mb-6">
              {[
                { index: 0, title: "🤫 Start Call Discreetly" },
                { index: 1, title: "🛡️ Minimal Data for Profile" },
                { index: 3, title: "❤️ Set Up Emergency Contact" },
                { index: 5, title: "🎭 Train Your AI Companion" },
                { index: 7, title: "⏰ Gentle Safety Reminders" },
                { index: 8, title: "🌟 Share Your Experience" },
              ].map((step, stepIndex) => {
                const isCurrentOrRelated =
                  currentScreen === step.index ||
                  (step.title === "🛡️ Minimal Data for Profile" &&
                    (currentScreen === 1 || currentScreen === 2)) ||
                  (step.title === "❤️ Set Up Emergency Contact" &&
                    (currentScreen === 3 || currentScreen === 4)) ||
                  (step.title === "🎭 Train Your AI Companion" &&
                    (currentScreen === 5 || currentScreen === 6));

                return (
                  <div
                    key={stepIndex}
                    className={`flex items-center space-x-2 ${
                      isCurrentOrRelated
                        ? "text-blue-600"
                        : "text-gray-600"
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                        isCurrentOrRelated
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      {stepIndex + 1}
                    </span>
                    <span>{step.title}</span>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-border pt-6">
              {/* <h4 className="font-semibold mb-4 text-center">
                Download the App
              </h4> */}
              <DownloadButtons comingSoon={true} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
