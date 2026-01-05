"use client";

import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

export function SkillsSection() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work
            with
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary/50">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant="secondary"
                        className="text-sm py-1.5 px-3 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">Full Stack Expertise</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Proficient in building end-to-end web applications with modern
                technologies. From crafting responsive frontends with React and
                Next.js to developing robust backends with Node.js and managing
                databases with MongoDB and SQL. Experienced in cloud deployment,
                CI/CD pipelines, and implementing secure authentication systems.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
