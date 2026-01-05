"use client";

import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: personalInfo.github,
      href: `https://github.com/${personalInfo.github}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: personalInfo.linkedin,
      href: `https://linkedin.com/in/${personalInfo.linkedin}`,
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={method.label}
                      href={method.href}
                      target={
                        method.label === "GitHub" || method.label === "LinkedIn"
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        method.label === "GitHub" || method.label === "LinkedIn"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-primary/10 transition-all duration-300 group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <method.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {method.label}
                        </div>
                        <div className="font-medium">{method.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-sm text-muted-foreground">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 h-full flex flex-col justify-center">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Send className="h-10 w-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">
                      Let&apos;s Work Together
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      I&apos;m always interested in hearing about new projects
                      and opportunities. Whether you have a question or just
                      want to say hi, I&apos;ll try my best to get back to you!
                    </p>
                  </div>
                  <div className="space-y-3">
                    <Button size="lg" className="w-full group" asChild>
                      <a href={`mailto:${personalInfo.email}`}>
                        <Mail className="mr-2 h-5 w-5" />
                        Send Me an Email
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full"
                      asChild
                    >
                      <a href={`tel:${personalInfo.phone}`}>
                        <Phone className="mr-2 h-5 w-5" />
                        Give Me a Call
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
