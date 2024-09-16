import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowRight, BookOpen, Headphones, Upload, Play, Pause, SkipBack, SkipForward, Download, ChevronDown } from "lucide-react"

export default function Component() {
  const [file, setFile] = useState(null)
  const [podcastType, setPodcastType] = useState('narrative')
  const [podcastLength, setPodcastLength] = useState('5')
  const [voice, setVoice] = useState('emma')
  const [expertiseLevel, setExpertiseLevel] = useState('beginner')
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentPodcast, setCurrentPodcast] = useState(null)
  const [showPlayer, setShowPlayer] = useState(false)

  const audioCreationRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowPlayer(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (audioCreationRef.current) {
      observer.observe(audioCreationRef.current)
    }

    return () => {
      if (audioCreationRef.current) {
        observer.unobserve(audioCreationRef.current)
      }
    }
  }, [])

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form submitted', { file, podcastType, podcastLength, voice, expertiseLevel })
    setCurrentPodcast({
      title: file ? file.name : 'Sample Podcast',
      duration: `${podcastLength}:00`,
    })
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleDownload = () => {
    console.log('Downloading podcast:', currentPodcast?.title)
  }

  const scrollToAudioCreation = () => {
    audioCreationRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <header className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">Sonar</div>
        </nav>
      </header>

      <main className="container mx-auto px-6 pb-32">
        <section className="py-12 md:py-16 lg:py-20 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Transform Your Readings <br className="hidden md:inline" />into Engaging Podcasts
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Sonar turns your materials into captivating podcasts that students <i>want</i> to listen to.
          </p>
          <div className="flex justify-center space-x-8 mb-12">
            <div className="flex flex-col items-center space-y-2 text-primary">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Upload className="w-8 h-8" />
              </div>
              <span className="font-medium">Upload</span>
            </div>
            <ArrowRight className="w-8 h-8 text-gray-400 self-center" />
            <div className="flex flex-col items-center space-y-2 text-primary">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-8 h-8" />
              </div>
              <span className="font-medium">Transform</span>
            </div>
            <ArrowRight className="w-8 h-8 text-gray-400 self-center" />
            <div className="flex flex-col items-center space-y-2 text-primary">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Headphones className="w-8 h-8" />
              </div>
              <span className="font-medium">Listen</span>
            </div>
          </div>
          <Button onClick={scrollToAudioCreation} className="text-lg px-8 py-6 rounded-full transition-all hover:scale-105">
            Try it out
            <ChevronDown className="ml-2 h-5 w-5" />
          </Button>
        </section>

        <section ref={audioCreationRef} className="py-20 bg-white rounded-2xl shadow-xl">
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-12">
            <div>
              <Label htmlFor="file-upload" className="block text-2xl font-semibold mb-4">
                Upload Your Document
              </Label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="file-upload"
                  className="flex flex-col items-center justify-center w-full h-72 border-2 border-primary/20 border-dashed rounded-2xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-16 h-16 mb-4 text-primary/60" />
                    <p className="mb-2 text-xl text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-sm text-gray-500">PDF, DOCX, or TXT (MAX. 20MB)</p>
                  </div>
                  <Input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".pdf,.docx,.txt"
                  />
                </label>
              </div>
              {file && <p className="mt-4 text-sm text-gray-500">File selected: {file.name}</p>}
            </div>

            <div className="space-y-10">
              <div>
                <Label className="text-2xl font-semibold mb-4 block">Podcast Type</Label>
                <RadioGroup value={podcastType} onValueChange={setPodcastType} className="flex space-x-6">
                  {['narrative', 'interview', 'lecture'].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <RadioGroupItem value={type} id={type} className="w-5 h-5" />
                      <Label htmlFor={type} className="text-lg">{type.charAt(0).toUpperCase() + type.slice(1)}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label className="text-2xl font-semibold mb-4 block">Podcast Length (minutes)</Label>
                <RadioGroup value={podcastLength} onValueChange={setPodcastLength} className="flex space-x-6">
                  {['5', '10', '15'].map((length) => (
                    <div key={length} className="flex items-center space-x-2">
                      <RadioGroupItem value={length} id={`length-${length}`} className="w-5 h-5" />
                      <Label htmlFor={`length-${length}`} className="text-lg">{length}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label className="text-2xl font-semibold mb-4 block">Voice</Label>
                <RadioGroup value={voice} onValueChange={setVoice} className="flex space-x-6">
                  {['emma', 'sophia', 'james'].map((v) => (
                    <div key={v} className="flex items-center space-x-2">
                      <RadioGroupItem value={v} id={v} className="w-5 h-5" />
                      <Label htmlFor={v} className="text-lg">{v.charAt(0).toUpperCase() + v.slice(1)}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label className="text-2xl font-semibold mb-4 block">Expertise Level</Label>
                <RadioGroup value={expertiseLevel} onValueChange={setExpertiseLevel} className="flex space-x-6">
                  {['beginner', 'intermediate', 'advanced'].map((level) => (
                    <div key={level} className="flex items-center space-x-2">
                      <RadioGroupItem value={level} id={level} className="w-5 h-5" />
                      <Label htmlFor={level} className="text-lg">{level.charAt(0).toUpperCase() + level.slice(1)}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>

            <Button type="submit" className="w-full text-xl py-8 rounded-xl transition-all hover:scale-105">
              Create Podcast
            </Button>
          </form>
        </section>
      </main>

      {showPlayer && (
        <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-200 p-4 transition-all duration-300 ease-in-out transform translate-y-0">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={togglePlayPause} disabled={!currentPodcast} className="rounded-full">
                {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
              </Button>
              <div>
                <p className="font-medium text-lg">{currentPodcast?.title}</p>
                <p className="text-sm text-gray-500">{currentPodcast?.duration}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" disabled={!currentPodcast} className="rounded-full">
                <SkipBack className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" disabled={!currentPodcast} className="rounded-full">
                <SkipForward className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleDownload} disabled={!currentPodcast} className="rounded-full">
                <Download className="h-6 w-6" />
                <span className="sr-only">Download podcast</span>
              </Button>
            </div>
          </div>
        </footer>
      )}
    </div>
  )
}