"use client";

import { achievements, languages, personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { Award, Globe } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn more about my background, skills, and what drives me as a
            developer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6 sm:p-8 h-full">
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I&apos;m a passionate Full Stack Developer based in{" "}
                  {personalInfo.location}, specializing in building exceptional
                  digital experiences. My journey in software development has
                  equipped me with a diverse skill set and a deep understanding
                  of modern web technologies.
                </p>
                <p>
                  With extensive experience in the MERN stack, I&apos;ve
                  successfully delivered production-grade applications serving
                  100k+ users. I thrive on solving complex problems and
                  transforming ideas into elegant, scalable solutions.
                </p>
                <p>
                  My approach combines technical expertise with a strong focus
                  on user experience, ensuring that every project I work on is
                  not just functional, but also intuitive and enjoyable to use.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <Badge key={lang} variant="secondary">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Achievements & Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Achievements */}
            <Card className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Achievements
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10"
                  >
                    <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                    <p className="text-sm text-muted-foreground">
                      {achievement}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-lg bg-primary/5">
                  <div className="text-3xl font-bold text-primary mb-1">
                    78+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    MongoDB Models
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/5">
                  <div className="text-3xl font-bold text-primary mb-1">
                    100K+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Users Served
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/5">
                  <div className="text-3xl font-bold text-primary mb-1">3+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/5">
                  <div className="text-3xl font-bold text-primary mb-1">
                    20+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Technologies
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
