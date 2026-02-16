'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { services } from "@/api/data";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { useState } from "react";
import { useActiveSection } from "@/hook/useActiveSection";

export function ServicesSection() {
  const { ref } = useActiveSection("Service", 0.5)
  return (
    <section ref={ref} id="service" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
            What I Do
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive web development services to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CollapsibleComponent
                popular={service.popular}
                features={service.features}
                title={service.title}
                description={service.description}
                Icon={service.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CollapsibleComponent = ({
  popular,
  Icon,
  title,
  description,
  features,
}: {
  popular: boolean;
  Icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Card
      className={`group hover:shadow-lg transition-all duration-300 border-border bg-card h-full relative ${popular ? "ring-2 ring-accent/20" : ""
        }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
            Most Popular
          </span>
        </div>
      )}
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
          <Icon className="w-8 h-8 text-accent" />
        </div>
        <CardTitle className="text-foreground group-hover:text-accent transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 mb-6">
          {features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-sm">
              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
              <span className="text-foreground">{feature}</span>
            </li>
          ))}
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleContent className="space-y-3 mb-6">
              {features.slice(3).map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </ul>

        <Button
          onClick={() => setIsOpen((perv) => !perv)}
          variant={popular ? "default" : "outline"}
          className="w-full group/btn"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};
