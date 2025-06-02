"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Brain,
  Eye,
  Users,
  BarChart3,
  Smartphone,
  Watch,
  Map,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Zap,
  Target,
  Heart,
  Code,
  Clock,
  MapPin,
  UserCheck,
  Ban,
  HeartCrack,
  TrendingDown,
  AlertCircle,
  Phone,
  ShieldX,
  ExternalLink,
} from "lucide-react";

import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  SafetyPrecautionsChart,
} from "@/components/ChartComponents";
import AppPrototype from "@/components/AppPrototype";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";


const theoryCards = [
  {
    icon: Eye,
    title: "Remote Guardian",
    subtitle: "Capable Guardianship",
    description:
      'The call simulates the presence of a "remote bystander" or "capable guardian" who is aware of the situation, disrupting the harasser\'s confidence that their actions are unobserved.',
    details: [
      "Capable Guardianship (Routine Activities Theory): The person on the other end of the call is perceived as a guardian who could be alerted, call for help, or witness the event, increasing the risk of apprehension.",
      "Reduces Anonymity: The core fear for many perpetrators is being caught. A phone call suggests their actions are not anonymous and could have immediate consequences.",
      "Psychological Impact: The simple belief that 'someone is listening' can be enough to make a perpetrator reconsider their actions, breaking the sense of power and control they feel over an isolated victim.",
    ],
  },
  {
    icon: Users,
    title: "The User's Shield",
    subtitle: "Non-Confrontational Strategy",
    description:
      "Women widely adopt phone calls as a safety tactic because it's a low-stakes, non-confrontational way to alter a threatening situation. Instead of directly challenging a potential harasser (or even holding keys between knuckles), which risks escalation, a phone call introduces a perceived third party.",
    details: [
      'Creates a "Social Shield": The act of being in a conversation makes the user appear occupied and socially connected, deterring unwanted approaches.',
      'Invited Space: It creates a sense of "invited space" or remote companionship, which can alleviate feelings of isolation and vulnerability.',
      'Reduces "Safety Work" Burden: An easy-to-use app would formalize this intuitive tactic, reducing the cognitive load of having to feign a convincing conversation under duress.',
    ],
  },
  {
    icon: Brain,
    title: "Perpetrator's Calculus",
    subtitle: "Rational Choice Theory",
    description:
      "For a potential perpetrator, a person on the phone is no longer an easy, isolated target. The call increases the perceived risk of being identified, reported, or confronted.",
    details: [
      'Rational Choice Theory (RCT) & Situational Crime Prevention (SCP): The call increases the perceived "cost" or risk of the crime (e.g. being identified, reported, or interrupted) and effort, making the potential "reward" less attractive. \n From a perpetrator\'s perspective, a woman on a phone call changes their risk-reward analysis, making them a less appealing target. This aligns with several criminological theories.',
      "Situational Action Theory (SAT): The call alters the immediate setting by introducing a deterrent threat (the remote listener), which can trigger deliberation in the offender and lead them to see crime as a less viable option.",
      "Disrupts Target Selection: Perpetrators often seek isolated or vulnerable individuals. A phone call signals connection and awareness, disrupting this selection script.",
    ],
  }
];

const techSolutions = [
  {
    icon: Smartphone,
    title: "Personal Safety Apps",
    examples: "Life360, bSafe, Hollie Guard",
    pros: "Multi-functional, some police integration, evidence capture",
    cons: "Battery dependent, potential stalking tool, effectiveness unproven",
  },
  {
    icon: Watch,
    title: "Wearable Devices",
    examples: "Smartwatch SOS, invisaWear",
    pros: "Discreet, always accessible, automatic detection possible",
    cons: "Manual activation needed, victim-blaming concerns",
  },
  {
    icon: Map,
    title: "Crowdsourcing Platforms",
    examples: "SafetiPin, Ushahidi, HarassMap",
    pros: "Community empowerment, data for planning, transparency",
    cons: "Subjective data, may increase fear, depends on authority action",
  },
  {
    icon: Lightbulb,
    title: "Environmental Tech",
    examples: "Smart lighting, CCTV, AI Detection",
    pros: "Proven crime reduction, real-time threat detection",
    cons: "Privacy concerns, algorithmic bias, high costs",
  },
];

export default function Home() {
  const [selectedTheoryCard, setSelectedTheoryCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-mesh">
      <Navigation />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center max-[350px]:overflow-visible max-h-[350px]:overflow-visible overflow-hidden pt-24 md:pt-32 max-[350px]:pt-0 max-h-[350px]:pt-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/50 to-primary/5" />
        <div className="container relative z-10 mx-auto px-6 text-center max-[350px]:px-4 max-h-[350px]:px-4">
          {/* Ultra small screens (<= 350px width OR height) - Simplified version */}
          <div className="max-[350px]:block max-h-[350px]:block hidden">
            <div className="flex items-center justify-center min-h-screen w-full max-[350px]:p-4 max-h-[350px]:p-4">
              <div className="w-full max-w-xs mx-auto text-center space-y-6">
                <span className="text-gradient">HerSignal</span>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <TooltipProvider>
                    <div className="text-xs/6 text-gray-600">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium ring-2 ring-primary ring-offset-2 ring-offset-background cursor-default">
                            Won #1
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <span>
                            Won the most inclusive and accessible prize
                          </span>
                        </TooltipContent>
                      </Tooltip>{" "}
                      at the{" "}
                      <a
                        href="https://www.eventbrite.co.uk/e/tackling-violence-against-women-and-girls-in-public-spaces-hackathon-tickets-1224875137509"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-primary transition-colors"
                      >
                        &quot;Tackling Violence against Women and Girls in
                        Public Spaces Hackathon&quot;
                      </a>
                    </div>
                  </TooltipProvider>

                  <div className="flex flex-col gap-2 items-center">
                    <Image
                      src="/app-store-badge.png"
                      alt="Download on App Store"
                      className="h-8 w-auto"
                      width={135}
                      height={40}
                    />
                    <Image
                      src="/google-play-badge.png"
                      alt="Get it on Google Play"
                      className="h-8 w-auto"
                      width={135}
                      height={40}
                    />
                  </div>

                  <div className="text-xs text-muted-foreground mt-4 pt-3 border-t border-border/50">
                    <div>Contact:</div>
                    <a
                      href="mailto:support@hersignal.org"
                      className="bg-primary text-white px-2 py-1 rounded-full hover:underline transition-all duration-200 text-xs inline-block mt-1"
                    >
                      support@hersignal.org
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Normal screens (> 350px width AND height) - Full version */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto space-y-8 max-[350px]:hidden max-h-[350px]:hidden"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
              className="flex justify-center mb-8"
            >
              <div className="relative animate-float">
                <Shield className="h-20 w-20 text-primary animate-bounce-subtle p-2 animate-pulse-slow rounded-full" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl/15 lg:text-8xl font-black leading-tight"
            >
              <span className="text-gradient">HerSignal</span>
              <br />
              <span className="text-foreground">AI Safety Companion</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Stay safe with AI-powered emergency calls. Instantly generate
              realistic conversations to help you escape dangerous situations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6 justify-center items-center pt-8"
            >
              {/* Award Text */}
              <TooltipProvider>
                <div className="text-center mb-4">
                  <div className="text-md/6 text-gray-600">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="bg-primary text-white px-2 py-1 rounded-full text-md font-medium mr-1 ring-2 ring-primary ring-offset-2 ring-offset-background cursor-default">
                          Won #1
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <span>Won the most inclusive and accessible prize</span>
                      </TooltipContent>
                    </Tooltip>{" "}
                    at the{" "}
                    <a
                      href="https://www.eventbrite.co.uk/e/tackling-violence-against-women-and-girls-in-public-spaces-hackathon-tickets-1224875137509"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-primary transition-colors"
                    >
                      &quot;Tackling Violence against Women and Girls in Public
                      Spaces Hackathon&quot;
                    </a>{" "}
                    <span className="hidden min-[786px]:inline">
                      at{" "}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href="https://www.ucl.ac.uk/ioe/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-primary transition-colors cursor-pointer"
                          >
                            UCL&apos;s Institute of Education
                          </a>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs max-xs:w-[80dvw]">
                          <span className="text-wrap">
                            #1 QS World University Rankings in Education for 12
                            consecutive years
                          </span>
                        </TooltipContent>
                      </Tooltip>
                    </span>
                  </div>
                </div>
              </TooltipProvider>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  variant="gradient"
                  size="xl"
                  className="group max-sm:w-[80dvw] max-sm:mx-20"
                  onClick={() =>
                    document
                      .getElementById("prototype")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Try the Prototype
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="max-sm:w-[80dvw] max-sm:mx-20"
                  onClick={() =>
                    document
                      .getElementById("theory")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Learn the Science
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* App Prototype Section */}
      <section
        id="prototype"
        className="py-24 md:py-32 bg-muted/30 max-[350px]:hidden max-h-[350px]:hidden"
      >
        <AppPrototype />
      </section>

      {/* Problem Section */}
      <section
        id="problem"
        className="py-24 md:py-32 max-[350px]:hidden max-h-[350px]:hidden"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient pb-2">
              The Shadow of Fear
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Before exploring solutions, it&apos;s crucial to grasp the profound and widespread impact of Violence Against Women and Girls (VAWG) in public spaces. This threat is not abstract; it shapes daily lives, curtails freedom, and inflicts deep, lasting harm.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0 }}
            >
              <Card className="glass-effect hover-lift h-full text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-destructive/10">
                    <Ban className="h-12 w-12 text-destructive" />
                  </div>
                  <CardTitle className="text-xl text-destructive">
                    Altered Lives & Restricted Freedom
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Nearly <strong className="font-semibold">50% of women in the UK</strong> feel unsafe walking alone after dark. Globally, countless women intentionally change routines, avoid public places, or limit participation in public life due to fear of harassment or assault.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0 }}
            >
              <Card className="glass-effect hover-lift h-full text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-pink-500/10">
                    <HeartCrack className="h-12 w-12 text-pink-500" />
                  </div>
                  <CardTitle className="text-xl text-pink-500">
                    The Mental Health Toll
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Experiencing or fearing VAWG leads to significant psychological impacts, including increased <strong className="font-semibold">anxiety, depression, PTSD</strong>, and a persistent state of hypervigilance for millions of women.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0 }}
            >
              <Card className="glass-effect hover-lift h-full text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-destructive/10">
                    <TrendingDown className="h-12 w-12 text-destructive" />
                  </div>
                  <CardTitle className="text-xl text-destructive">
                    The Economic Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Gender-Based Violence, including VAWG in public spaces, imposes enormous economic costs, estimated at <strong className="font-semibold">€366 billion annually in the EU alone</strong> through healthcare, justice system responses, and lost productivity.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0 }}
            >
              <Card className="glass-effect hover-lift h-full text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-orange-500/10">
                    <AlertCircle className="h-12 w-12 text-orange-500" />
                  </div>
                  <CardTitle className="text-xl text-orange-500">
                    Underreporting Crisis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Less than <strong className="font-semibold">10% of violence against women</strong> is reported to authorities, creating a massive gap in safety response.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0 }}
            >
              <Card className="glass-effect hover-lift h-full text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10">
                    <ShieldX className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-primary">
                    The Safety Work Burden
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Women perform constant cognitive labor such as route planning, attire choices, and vigilance - an invisible tax on freedom.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0 }}
            >
              <Card className="glass-effect hover-lift h-full text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-accent/20">
                    <Phone className="h-12 w-12 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl">
                    Mobile Safety Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="font-semibold">68-94% of women in developing countries</strong> report feeling safer with mobile phones, using them for deterrence.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-6xl mx-auto"
          >
            <h3 className="text-3xl font-bold mb-8">The Daily Burden of &quot;Safety Work&quot;</h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              The constant threat forces women to adopt numerous precautionary measures, a form of unpaid, stressful &quot;safety work.&quot; This chart illustrates common tactics women employ to navigate public spaces.
            </p>
            <Card className="glass-effect">
              <CardContent className="p-8">
                <SafetyPrecautionsChart />
              </CardContent>
            </Card>
          </motion.div> */}
        </div>
      </section>

      {/* Theory Section */}
      <section
        id="theory"
        className="py-24 md:py-32 max-[350px]:hidden max-h-[350px]:hidden"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient pb-2">
              The Science Behind Deterrence
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Phone calls as safety tools aren&apos;t random. They&apos;re
              grounded in established criminological theories that explain human
              behavior in threatening situations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {theoryCards.map((card, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <Card 
                    className="cursor-pointer hover-lift glass-effect group overflow-hidden relative"
                    onClick={() => setSelectedTheoryCard(index)}
                  >
                    <div className="absolute top-4 right-4 z-10">
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <card.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {card.title}
                      </CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {card.subtitle}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* User Profiles Section */}
      <section
        id="profiles"
        className="py-24 md:py-32 bg-muted/30 max-[350px]:hidden max-h-[350px]:hidden"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient pb-2">
              Who Benefits
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Users stories from women who need innovative safety solutions in
              their daily lives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Ayesha Khan",
                age: 24,
                image: "/ayesha-khan.png",
                useCase:
                  "Frequently walks home from university or late shifts; has experienced catcalling and following.",
                needs:
                  "Discreet app access via smartwatch; AI call provides visible deterrent and records interactions.",
                useCaseIcon: Clock,
                needsIcon: Watch,
              },
              {
                name: "Claire Newton",
                age: 41,
                image: "/claire-newton.png",
                useCase:
                  "Works night shifts, commutes via public transport; worries about being targeted due to uniform and timing.",
                needs:
                  "Easy-to-activate SOS voice command; AI bot reassures and collects evidence if needed.",
                useCaseIcon: MapPin,
                needsIcon: Smartphone,
              },
              {
                name: "Ella Macrae",
                age: 17,
                image: "/ella-macrae.png",
                useCase:
                  "Goes out with friends to city centre, but feels unsafe waiting for buses at night.",
                needs:
                  "Parent-connected alerts; teen-friendly design that doesn't draw attention; quick tap to activate AI call.",
                useCaseIcon: Users,
                needsIcon: UserCheck,
              },
            ].map((profile, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <Card className="glass-effect hover-lift h-full">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                      <Image
                        src={profile.image}
                        alt={profile.name}
                        className="w-full h-full object-cover"
                        width={96}
                        height={96}
                      />
                    </div>
                    <CardTitle className="text-2xl">
                      <span className="font-bold">{profile.name}</span>
                      <span className="text-muted-foreground font-normal">
                        {" "}
                        ({profile.age})
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <profile.useCaseIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-sm text-primary mb-1">
                            Use Case
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {profile.useCase}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <profile.needsIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-sm text-primary mb-1">
                            Needs
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {profile.needs}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Concept Section */}
      <section
        id="concept"
        className="py-24 md:py-32 max-[350px]:hidden max-h-[350px]:hidden"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient pb-2">
              AI-Powered Safety Shield
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transforming intuitive safety tactics into reliable, intelligent
              technology requires careful balance of innovation and ethics.
            </p>
          </motion.div>

          <Tabs
            defaultValue="features"
            className="max-w-6xl mx-auto max-sm:mb-30"
          >
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-0 mb-12 max-sm:mb-[130px]">
              <TabsTrigger
                value="features"
                className="text-sm sm:text-base py-2 sm:py-3"
              >
                Core Features
              </TabsTrigger>
              <TabsTrigger
                value="design"
                className="text-sm sm:text-base py-2 sm:py-3"
              >
                Design Principles
              </TabsTrigger>
              <TabsTrigger
                value="ethics"
                className="text-sm sm:text-base py-2 sm:py-3"
              >
                Ethical Framework
              </TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Brain,
                    title: "Hyper-Realistic AI Voice",
                    desc: "Advanced text-to-speech generating natural, convincing conversation with varied personas and tones.",
                  },
                  {
                    icon: Shield,
                    title: "Familiar Voice",
                    desc: "Your loved one can record their voice, allowing the model to imitate them, creating a sense of familiarity.",
                  },
                  {
                    icon: Zap,
                    title: "Instant Activation",
                    desc: "Discreet activation avoiding conspicuous actions that could alert potential aggressors.",
                  },
                  {
                    icon: AlertTriangle,
                    title: "Tiered Alerts",
                    desc: "Optional escalation to trusted contacts with location data if situations deteriorate.",
                  },
                  {
                    icon: Eye,
                    title: "Camouflaged Interface",
                    desc: "Interface mimics standard call screens, allowing discreet use without revealing safety purpose.",
                  },
                  {
                    icon: CheckCircle,
                    title: "User Control",
                    desc: "Clear feedback and simple termination options maintain user agency throughout interaction.",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="glass-effect hover-lift h-full">
                      <CardHeader className="text-center">
                        <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                        <CardTitle className="text-xl">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="design" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Brain,
                    title: "Minimal Cognitive Load",
                    desc: "Radically simple design. Under stress, complex navigation fails. Core function must be immediately accessible.",
                  },
                  {
                    icon: Users,
                    title: "Co-Design Approach",
                    desc: (
                      <>
                        Developed <strong>with</strong> diverse women, not{" "}
                        <strong>for</strong> them. Lived experiences inform
                        every design decision.
                      </>
                    ),
                  },
                  {
                    icon: Heart,
                    title: "Accessibility First",
                    desc: "Usable by people with diverse abilities, considering motor skills under stress and visual impairments.",
                  },
                  {
                    icon: Target,
                    title: "Focused Purpose",
                    desc: "This is not about providing as many features as possible. Interface remains uncluttered and paramount, serving detterance as the primary focus.",
                  },
                  {
                    icon: Eye,
                    title: "Clear Iconography",
                    desc: "Instantly recognizable visual elements. Secondary buttons must have unambiguous icons.",
                  },
                  {
                    icon: Code,
                    title: "Stress Testing",
                    desc: "Rigorous usability testing in simulated high-stress scenarios to eliminate friction points.",
                  },
                ].map((principle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="glass-effect hover-lift h-full">
                      <CardHeader className="text-center">
                        <principle.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                        <CardTitle className="text-xl">
                          {principle.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          {principle.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ethics" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "Privacy & Security",
                    desc: "Minimal data collection. All stored data is encrypted. Opt-in only for temporary location sharing. We never sell or share your data.",
                    color: "destructive",
                  },
                  {
                    icon: AlertTriangle,
                    title: "No False Promises",
                    desc: "We hope the theories of detterance will keep you safe - but unfortunately in the world we live in, a guarantee cannot be made.",
                    color: "destructive",
                  },
                  {
                    icon: Heart,
                    title: "Avoid Victim Blame",
                    desc: "Design must not shift safety burden to users. It's a tool, not replacement for societal responsibility.",
                    color: "destructive",
                  },
                  {
                    icon: Brain,
                    title: "Escalation Risk",
                    desc: "Determined perpetrators discovering fake calls might become more aggressive. We attempt to mitigate this risk through perfect user interface replicas.",
                    color: "destructive",
                  },
                  {
                    icon: Users,
                    title: "Inclusive AI",
                    desc: "AI voices and scripts must be inclusive and relatable to diverse users, avoiding marginalization.",
                    color: "destructive",
                  },
                  {
                    icon: CheckCircle,
                    title: "Clear Accountability",
                    desc: "Transparent disclaimers about limitations. Cannot substitute for emergency services or guarantee safety.",
                    color: "destructive",
                  },
                ].map((ethical, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="glass-effect hover-lift border-destructive/20 h-full">
                      <CardHeader className="text-center">
                        <ethical.icon className="h-12 w-12 text-destructive mx-auto mb-4" />
                        <CardTitle className="text-xl text-destructive">
                          {ethical.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          {ethical.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h3 className="text-3xl font-bold text-center mb-12">
              Current Technology Landscape
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techSolutions.map((tech, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    layout
                  >
                    <Card className="hover-lift glass-effect group overflow-hidden">
                      <CardHeader className="text-center">
                        <tech.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {tech.title}
                        </CardTitle>
                        {/* <p className="text-sm text-muted-foreground mt-2">
                          Examples: {tech.examples}
                        </p> */}
                      </CardHeader>

                      <motion.div
                        initial={false}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        transition={{
                          duration: 0.1,
                          ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <CardContent className="pt-0">
                          <div className="border-t border-border/50 pt-4 space-y-4">
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              transition={{
                                duration: 0.2,
                              }}
                            >
                              <h4 className="font-semibold text-green-600 mb-2">
                                ✓ Strengths
                              </h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {tech.pros}
                              </p>
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              transition={{
                                duration: 0.2,
                              }}
                            >
                              <h4 className="font-semibold text-destructive mb-2">
                                ✗ Limitations
                              </h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {tech.cons}
                              </p>
                            </motion.div>
                          </div>
                        </CardContent>
                      </motion.div>

                      {/* <div className="flex justify-center pb-4">
                        <motion.div
                          animate={{ rotate: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-primary"
                        >
                          <ArrowRight className="h-4 w-4 rotate-90" />
                        </motion.div>
                      </div> */}
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Context Section */}
      <section
        id="context"
        className="py-24 md:py-32 bg-muted/30 max-[350px]:hidden max-h-[350px]:hidden"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient pb-2">
              Beyond Technology
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Though technology is useful in tackling violence against women and
              girls, there are various other factors that need to be considered
              in order to create a holistic approach to safety.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Lightbulb,
                title: "Environmental Design",
                subtitle: "CPTED Principles",
                desc: "Well-lit, visible spaces amplify deterrent effects. Technology complements but cannot replace thoughtful urban planning.",
              },
              {
                icon: Users,
                title: "Education & Culture",
                subtitle: "Norm Change",
                desc: "Long-term prevention requires challenging harmful attitudes. Apps provide individual safety while education addresses causes.",
              },
              {
                icon: Shield,
                title: "Policy Frameworks",
                subtitle: "Systemic Response",
                desc: "Strong laws create accountability contexts. Technology empowers individuals while policy ensures institutional support.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <Card className="glass-effect hover-lift h-full text-center">
                  <CardHeader>
                    <item.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {item.subtitle === "CPTED Principles" ? (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="border-b border-dotted border-primary cursor-help">
                                {item.subtitle}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <span>
                                Crime Prevention Through Environmental Design
                              </span>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ) : (
                        item.subtitle
                      )}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      {/* <section
        id="challenge"
        className="py-24 md:py-32 max-[350px]:hidden max-h-[350px]:hidden"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient pb-2">
              Innovation Principles
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Evidence-based guidelines for creating ethical, effective, and
              truly empowering safety solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {innovationPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <Card className="glass-effect hover-lift h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl font-bold text-primary">
                        {principle.number}
                      </span>
                      <principle.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-card border-t py-12 max-[350px]:hidden max-h-[350px]:hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex justify-center items-center gap-3 mb-6">
              <div className="relative animate-float">
                <Shield className="h-8 w-8 text-primary animate-bounce-subtle p-1 animate-pulse-slow rounded-full" />
              </div>
              <span className="text-2xl font-bold text-gradient">
                HerSignal
              </span>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Combining research from the{" "}
              <a
                href="https://www.eventbrite.co.uk/e/tackling-violence-against-women-and-girls-in-public-spaces-hackathon-tickets-1224875137509"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary transition-colors"
              >
                &quot;Tackling Violence against Women and Girls in Public Spaces
                Hackathon&quot;
              </a>{" "}
              to inform evidence-based innovation.
            </p>
            <p className="text-xs text-muted-foreground">
              Data from UN Women, WHO, national statistics offices, and academic
              research • Built for innovators and changemakers
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Contact:{" "}
              <a
                href="mailto:support@hersignal.org"
                className="bg-primary text-white px-2 py-1 rounded-full hover:underline transition-all duration-200"
              >
                support@hersignal.org
              </a>
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Theory Card Modal */}
      <Dialog open={selectedTheoryCard !== null} onOpenChange={() => setSelectedTheoryCard(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              {selectedTheoryCard !== null && (
                <>
                  <div className="p-2 rounded-full bg-primary/10">
                    {React.createElement(theoryCards[selectedTheoryCard].icon, { 
                      className: "h-6 w-6 text-primary" 
                    })}
                  </div>
                  <div>
                    <div className="text-xl font-bold">{theoryCards[selectedTheoryCard]?.title}</div>
                    <div className="text-sm text-primary font-medium">{theoryCards[selectedTheoryCard]?.subtitle}</div>
                  </div>
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          
          {selectedTheoryCard !== null && (
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-primary">
                Key Mechanisms:
              </h4>
              <ul className="space-y-3">
                {theoryCards[selectedTheoryCard].details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">
                      {detail.includes(':') ? (
                        <>
                          <strong>{detail.split(':')[0]}:</strong>
                          {detail.split(':').slice(1).join(':')}
                        </>
                      ) : (
                        detail
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
