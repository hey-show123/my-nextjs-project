"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Smartphone, Github, Linkedin, Twitter } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon.",
      })
      form.reset()
    }, 1000)
  }

  return (
    <div className="container mx-auto py-24 px-4 md:px-6">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out using the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>
                  I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Message subject" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message" 
                              className="min-h-[200px] resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <p className="text-center text-sm text-muted-foreground w-full">
                  Your information will never be shared with third parties.
                </p>
              </CardFooter>
            </Card>
          </div>
          
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:hey_show.dev@outlook.jp" className="text-muted-foreground hover:text-primary transition-colors">
                      hey_show.dev@outlook.jp
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Smartphone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">Available upon request</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">Tokyo, Japan</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-4">
                  <Button asChild variant="outline" className="justify-start">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="space-x-2">
                      <Github className="h-5 w-5" />
                      <span>GitHub</span>
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="justify-start">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="space-x-2">
                      <Linkedin className="h-5 w-5" />
                      <span>LinkedIn</span>
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="justify-start">
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="space-x-2">
                      <Twitter className="h-5 w-5" />
                      <span>Twitter</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-medium mb-2">Availability</h3>
                <p className="text-muted-foreground mb-4">
                  I'm currently available for freelance work and collaborations.
                </p>
                <Separator className="my-4" />
                <h3 className="font-medium mb-2">Response Time</h3>
                <p className="text-muted-foreground">
                  Usually within 24-48 hours during weekdays.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  )
}