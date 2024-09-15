/**
 * v0 by Vercel.
 * @see https://v0.dev/t/HSEAkjL7u8k
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function Component() {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false)
  const handleTryItNowClick = () => {
    const mainElement = document.querySelector("main")
    if (mainElement) {
      mainElement.scrollIntoView({ behavior: "smooth" })
    }
  }
  const handleCreatePodcastClick = () => {
    setIsPlayerOpen(true)
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900">
      <header className="flex items-center justify-between w-full max-w-4xl px-8 py-4 border-b">
        <Link href="#" className="text-xl font-bold" prefetch={false}>
          Sonar Education
        </Link>
        <nav>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            About
          </Link>
        </nav>
      </header>
      <main className="flex flex-col items-center w-full max-w-4xl p-8 space-y-8">
        <h2 className="text-4xl font-bold text-center">Transform your materials into engaging audio podcasts.</h2>
        <p>Assign content students actually like.</p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <UploadIcon className="w-6 h-6 text-muted-foreground" />
          <ArrowRightIcon className="w-6 h-6 text-muted-foreground" />
          <MicIcon className="w-6 h-6 text-muted-foreground" />
          <ArrowRightIcon className="w-6 h-6 text-muted-foreground" />
          <PlayIcon className="w-6 h-6 text-muted-foreground" />
        </div>
        <Button
          className="bg-primary text-primary-foreground"
          onClick={() => {
            const mainElement = document.querySelector("main")
            if (mainElement) {
              mainElement.scrollIntoView({
                behavior: "smooth",
                block: "end",
              })
            }
          }}
        >
          Try it now
        </Button>
        <div className="w-full space-y-6 bg-muted p-6 rounded-md">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Upload your course materials</h3>
            <div className="flex items-center justify-center w-full h-48 border-2 border-dashed rounded-md">
              <UploadIcon className="w-12 h-12 text-muted-foreground" />
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Settings</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="length">Length (minutes)</Label>
                <RadioGroup id="length" defaultValue="5">
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5" id="length-5" />
                      <Label htmlFor="length-5">5</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="10" id="length-10" />
                      <Label htmlFor="length-10">10</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="15" id="length-15" />
                      <Label htmlFor="length-15">15</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="voice">Voice</Label>
                <RadioGroup id="voice" defaultValue="Caroline">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Caroline" id="voice-caroline" />
                      <Label htmlFor="voice-caroline">Caroline</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="John" id="voice-john" />
                      <Label htmlFor="voice-john">John</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Rachel" id="voice-rachel" />
                      <Label htmlFor="voice-rachel">Rachel</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="level">Level</Label>
                <RadioGroup id="level" defaultValue="Beginner">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Beginner" id="level-beginner" />
                      <Label htmlFor="level-beginner">Beginner</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Intermediate" id="level-intermediate" />
                      <Label htmlFor="level-intermediate">Intermediate</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Expert" id="level-expert" />
                      <Label htmlFor="level-expert">Expert</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>
        <Button className="w-full bg-primary text-primary-foreground" onClick={handleCreatePodcastClick}>
          Create podcast
        </Button>
      </main>
      {isPlayerOpen && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full" />
              <div>
                <h4 className="font-medium">Podcast Title</h4>
                <p className="text-sm text-gray-500">Podcast Description</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <RewindIcon className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon">
                <PlayIcon className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon">
                <ForwardIcon className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setIsPlayerOpen(false)}>
                <XIcon className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function ForwardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 17 20 12 15 7" />
      <path d="M4 18v-2a4 4 0 0 1 4-4h12" />
    </svg>
  )
}


function MicIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  )
}


function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}


function RewindIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11 19 2 12 11 5 11 19" />
      <polygon points="22 19 13 12 22 5 22 19" />
    </svg>
  )
}


function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
