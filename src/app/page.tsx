import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center space-x-3">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-3xl flex items-center justify-center shadow-xl">
              <svg
                className="w-10 h-10 text-primary-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
              ImageToText
            </h1>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              AI-Powered Text Extraction
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform images into editable text with our advanced OCR technology. 
              Process single images or batch multiple files simultaneously with industry-leading accuracy.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Badge variant="secondary" className="text-sm px-3 py-1">99.5% Accuracy</Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">50+ Languages</Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">Batch Processing</Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">Privacy First</Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">Free to Use</Badge>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Button size="lg" className="shadow-lg px-8">
              Start Extracting Text
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/about">Learn More</a>
            </Button>
          </div>
        </div>

        {/* Features Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Process images in under 3 seconds with our optimized AI models
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">99.5% Accurate</h3>
              <p className="text-muted-foreground">
                Industry-leading accuracy powered by advanced neural networks
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Batch Processing</h3>
              <p className="text-muted-foreground">
                Process up to 10 images simultaneously with smart queuing
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Secure & Private</h3>
              <p className="text-muted-foreground">
                Your data is processed securely and never stored permanently
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Links */}
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Explore Our Platform</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Discover all the features and resources available to help you master text extraction technology.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
              <Button variant="outline" size="lg" asChild className="h-16">
                <a href="/instructions" className="flex flex-col items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>User Guide</span>
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="h-16">
                <a href="/blog" className="flex flex-col items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <span>OCR Blog</span>
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="h-16">
                <a href="/faq" className="flex flex-col items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>FAQ</span>
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="h-16">
                <a href="/contact" className="flex flex-col items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Contact</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Technology Showcase */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold">Powered by Advanced AI Technology</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">99.5%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">&lt;3s</div>
              <div className="text-sm text-muted-foreground">Processing Time</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Languages</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">10MB</div>
              <div className="text-sm text-muted-foreground">Max File Size</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-4xl font-bold">Ready to Extract Text?</h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto text-lg">
              Join thousands of users who trust ImageToText for accurate, fast, and secure text extraction. 
              No registration required - start processing your images instantly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="shadow-lg px-8">
                Start OCR Now
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                View Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}