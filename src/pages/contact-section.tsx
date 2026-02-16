'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "motion/react";
import {
  Download,
  FileUser,
  Loader2,
  Mail,
  MapPin,
  Phone,
  PhoneOutgoing,
  Send,
} from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useActiveSection } from "@/hook/useActiveSection";
export function ContactSection() {
  const [loading, setLoading] = useState(false);

  const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.email({ message: "Invalid email" }),
    message: z.string().min(1, { message: "Message is required" }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    if (data.name && data.email && data.message) {
      setLoading(true);
      emailjs
        .send(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_TEMPLATE_ID,
          {
            from_name: data.name,
            from_email: data.email,
            message: data.message,
          },
          import.meta.env.VITE_EMAIL_PUBLIC_ID
        )
        .then(
          () => {
            setLoading(false);
            alert("Message sent successfully!");
            form.reset();
          },
          (error) => {
            setLoading(false);
            alert("Failed to send: " + JSON.stringify(error));
            form.reset();
          }
        );
    }
  };

  const { ref } = useActiveSection("Contact", 0.5);

  return (
    <section id="contact" ref={ref} className="py-20 bg-muted/30 max-w-screen overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-screen mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-serif font-semibold text-2xl text-foreground mb-4">
                Get In Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Location</h4>
                  <p className="text-muted-foreground">
                    Shajah, United Arab Emirates
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Email</h4>
                  <p className="text-muted-foreground">
                    heinhtetpaing2273@gmail.com
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center justify-start w-[90%] md:w-[70%]  gap-4"
              >

                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Phone</h4>
                  <p className="text-muted-foreground">+971 563 130 278</p>
                </div>

                <Button variant={"ghost"} className="bg-accent/5 ml-auto rounded-lg">
                  <a href="tel:+971563130278">
                    <PhoneOutgoing className="w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center justify-start w-[90%] md:w-[70%] gap-4"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <FileUser className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Resume</h4>
                </div>
                <Button variant={"ghost"} className="bg-accent/5 ml-auto rounded-lg">
                  <a
                    href="/files/Hein Htet Paing - Web Developer.pdf"
                    download={true}
                  >
                    <Download className="w-5 h-5 " />
                  </a>
                </Button>
              </motion.div>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-foreground">
                  Send a Message
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel
                            htmlFor="name"
                            className="text-sm font-medium text-foreground"
                          >
                            Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              id="name"
                              {...field}
                              placeholder="Your name"
                              className="bg-input border-border"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel
                            htmlFor="email"
                            className="text-sm font-medium text-foreground"
                          >
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              id="email"
                              {...field}
                              placeholder="your.email@example.com"
                              className="bg-input border-border"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel
                            htmlFor="message"
                            className="text-sm font-medium text-foreground"
                          >
                            Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              id="message"
                              {...field}
                              placeholder="Tell me about your project..."
                              rows={5}
                              className="bg-input border-border resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full group">
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />{" "}
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />{" "}
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
