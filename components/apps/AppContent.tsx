"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Download, ExternalLink, Github, Mail, Send } from "lucide-react";
import { FormEvent, useMemo, useState, type ReactNode } from "react";
import { certifications, contactRows, education, experience, interests, profile, projects, terminalCommands } from "@/data/portfolio";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import type { AppId, Project } from "@/types/portfolio";
import { appleSpring, fadeThrough } from "@/utils/animations";
import { cn } from "@/utils/cn";
import { InfoRow } from "@/components/ui/InfoRow";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SkillPill } from "@/components/ui/SkillPill";

export function AppContent({ app }: { app: AppId }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={app}
        variants={fadeThrough}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={appleSpring}
        className="h-full"
      >
        {app === "about" && <AboutApp />}
        {app === "education" && <EducationApp />}
        {app === "projects" && <ProjectsApp />}
        {app === "skills" && <SkillsApp />}
        {app === "resume" && <ResumeApp />}
        {app === "contact" && <ContactApp />}
        {app === "terminal" && <TerminalApp />}
        {app === "settings" && <SettingsApp />}
      </motion.div>
    </AnimatePresence>
  );
}

function ContentScroll({ children }: { children: ReactNode }) {
  return <div className="native-scroll h-full overflow-y-auto px-[20px] py-[20px]">{children}</div>;
}

function AboutApp() {
  return (
    <ContentScroll>
      <div className="flex items-center gap-[15px]">
        <motion.div
          initial={{ scale: 0.94, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={appleSpring}
          className="grid h-[62px] w-[62px] place-items-center rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 text-[21px] font-bold text-white shadow-[0_18px_36px_rgba(49,102,220,.32)]"
        >
          {profile.initials}
        </motion.div>
        <div>
          <h1 className="text-[18px] font-bold leading-tight text-white">{profile.name}</h1>
          <p className="mt-[4px] text-[13px] font-semibold leading-tight text-appleBlue">{profile.role}</p>
          <p className="mt-[7px] text-[11px] font-medium text-white/48">{profile.location}</p>
        </div>
      </div>

      <div className="mt-[20px]">
        <SectionLabel>About</SectionLabel>
        <p className="max-w-[470px] text-[13px] font-semibold leading-[1.65] text-white/58">{profile.bio}</p>
      </div>

      <div className="mt-[20px]">
        <SectionLabel>Skills</SectionLabel>
        <div className="flex flex-wrap gap-[7px]">
          {profile.skills.map((skill) => (
            <SkillPill key={skill} skill={skill} />
          ))}
        </div>
      </div>

      <div className="mt-[20px] grid gap-3 sm:grid-cols-2">
        {experience.map((item) => (
          <InfoRow key={item.role} label={item.timeline} value={item.role}>
            <p className="mt-1 text-[11px] font-semibold text-appleBlue">{item.company}</p>
            <p className="mt-2 text-[11px] leading-5 text-white/55">{item.summary}</p>
          </InfoRow>
        ))}
      </div>
    </ContentScroll>
  );
}

function EducationApp() {
  return (
    <ContentScroll>
      <div className="space-y-4">
        <InfoRow label="University" value={education.university} className="p-4" />
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoRow label="Degree" value={education.degree} />
          <InfoRow label="Timeline" value={education.timeline} />
        </div>
        <InfoRow label="Coursework">
          <div className="mt-3 flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <SkillPill key={course} skill={course} />
            ))}
          </div>
        </InfoRow>
        <InfoRow label="education">
          <div className="mt-3 space-y-3">
            {education.achievements.map((achievement) => (
              <div key={achievement} className="flex items-center gap-3 text-[12px] font-medium text-white/72">
                <Check className="h-3.5 w-3.5 text-appleBlue" />
                {achievement}
              </div>
            ))}
          </div>
        </InfoRow>
      </div>
    </ContentScroll>
  );
}

function ProjectsApp() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((project) => project.category)))], []);
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((project) => project.category === active);

  return (
    <ContentScroll>
      <div className="mb-5 flex flex-wrap gap-2">
        {categories.map((category) => (
          <motion.button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            whileTap={{ scale: 0.96 }}
            className={cn(
              "h-8 rounded-full border px-3 text-[12px] font-semibold",
              active === category
                ? "border-appleBlue bg-appleBlue text-white"
                : "border-white/[.08] bg-white/[.045] text-white/58 hover:text-white/82",
            )}
          >
            {category}
          </motion.button>
        ))}
      </div>
      <div className="grid gap-4">
        {filtered.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </ContentScroll>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -3, boxShadow: "0 22px 60px rgba(0,0,0,.32), inset 0 1px rgba(255,255,255,.08)" }}
      transition={appleSpring}
      className="rounded-[14px] border border-white/[.075] bg-white/[.055] p-4"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-[14px] font-bold text-white">{project.name}</h3>
          <p className="mt-2 text-[11px] leading-5 text-white/55">{project.description}</p>
        </div>
        <span className="rounded-full bg-appleBlue/15 px-2.5 py-1 text-[10px] font-bold text-appleBlue">{project.category}</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="rounded-full border border-white/[.08] bg-black/10 px-2.5 py-1 text-[10px] font-semibold text-white/54">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-5 flex gap-3">
        <a className="macos-link" href={project.github} target="_blank" rel="noreferrer">
          <Github className="h-4 w-4" /> GitHub
        </a>
        <a className="macos-link" href={project.demo} target="_blank" rel="noreferrer">
          <ExternalLink className="h-4 w-4" /> Live Demo
        </a>
      </div>
    </motion.article>
  );
}

function SkillsApp() {
  const groups = {
    "Programming Languages": ["C++", "Java", "JavaScript", "Python", "Scala"],
    "Frontend Technologies": ["HTML5", "CSS3", "Bootstrap", "React.js", "Node.js"],
    Database: ["SQL", "MongoDB", "Data Warehousing", "Data Governance", "Master Data Management"],
    "Big Data & Analytics": ["Hadoop", "Hive", "Kafka", "Spark", "Sqoop", "Tableau", "QlikView", "PowerBI", "Data Science"],
    "AI & Intelligent Automation": ["PyTorch", "GNN", "OpenAI API", "Machine Learning", "Intelligent Automation"],
    "Soft Skills": ["Leadership", "Teamwork", "Public Speaking", "Business Analysis", "Research", "Consulting"],
  };

  return (
    <ContentScroll>
      <div className="space-y-4">
        {Object.entries(groups).map(([group, skills]) => (
          <InfoRow key={group} label={group}>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <SkillPill key={skill} skill={skill} />
              ))}
            </div>
          </InfoRow>
        ))}
      </div>
    </ContentScroll>
  );
}

function ResumeApp() {
  const notify = usePortfolioStore((state) => state.notify);

  return (
    <ContentScroll>
      <div className="grid gap-4">
        <InfoRow label="Resume" value={`${profile.name} - ${profile.role}`}>
          <p className="mt-3 text-[12px] leading-5 text-white/56">
            Download Pranay's resume covering AI/ML projects, analytics skills, startup research, certifications, and leadership experience.
          </p>
          <motion.a
            href="/resume_soon.pdf"
            download
            onClick={() => notify("Resume download started")}
            whileTap={{ scale: 0.97 }}
            className="mt-4 inline-flex h-9 items-center gap-2 rounded-full bg-appleBlue px-4 text-[12px] font-bold text-white shadow-[0_10px_28px_rgba(10,132,255,.32)]"
          >
            <Download className="h-5 w-5" /> Download Resume
          </motion.a>
        </InfoRow>
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoRow label="Certifications" value="Analytics & GenAI">
            <div className="mt-2 space-y-2">
              {certifications.map((item) => (
                <p key={item} className="text-[11px] leading-5 text-white/54">{item}</p>
              ))}
            </div>
          </InfoRow>
          <InfoRow label="Interests" value="Creative & Active">
            <div className="mt-2 flex flex-wrap gap-2">
              {interests.map((item) => <SkillPill key={item} skill={item} />)}
            </div>
          </InfoRow>
        </div>
      </div>
    </ContentScroll>
  );
}

function ContactApp() {
  const notify = usePortfolioStore((state) => state.notify);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    notify("Message staged in Mail");
  };

  return (
    <ContentScroll>
      <h2 className="mb-5 text-[17px] font-bold text-white">Get in Touch</h2>
      <div className="space-y-3">
        {contactRows.map((row) => (
          <motion.a
            key={row.title}
            href={row.href}
            target={row.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,.075)" }}
            whileTap={{ scale: 0.985 }}
            transition={appleSpring}
            className="flex min-h-[59px] items-center rounded-[13px] border border-white/[.07] bg-white/[.055] px-4 shadow-card"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-[13px] font-bold text-white">
              {row.initials}
            </span>
            <span className="ml-4 min-w-0">
              <span className="block text-[13px] font-bold text-white/90">{row.title}</span>
              <span className="block truncate text-[11px] font-semibold text-white/32">{row.value}</span>
            </span>
            <ArrowRight className="ml-auto h-4 w-4 text-appleBlue" />
          </motion.a>
        ))}
      </div>
      <form
  action="https://formspree.io/f/mbdekdvp"
  method="POST"
  className="mt-4 grid gap-3 rounded-[14px] border border-white/[.07] bg-white/[.045] p-3"
>
  <input
    className="macos-input"
    placeholder="Name"
    name="name"
    required
  />

  <input
    className="macos-input"
    placeholder="Email"
    type="email"
    name="email"
    required
  />

  <textarea
    className="macos-input min-h-24 resize-none py-3"
    placeholder="Message"
    name="message"
    required
  />

  <button
    className="inline-flex h-9 items-center justify-center gap-2 rounded-full bg-appleBlue text-[12px] font-bold text-white"
    type="submit"
  >
    <Send className="h-4 w-4" /> Send Email
  </button>
</form>
    </ContentScroll>
  );
}

function TerminalApp() {
  const [lines, setLines] = useState<string[]>(["Last login: today on ttys000", "Type help to view commands."]);
  const [value, setValue] = useState("");

  const run = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const command = value.trim().toLowerCase();
    if (!command) return;
    if (command === "clear") {
      setLines([]);
      setValue("");
      return;
    }
    setLines((current) => [...current, `$ ${command}`, ...(terminalCommands[command] ?? [`command not found: ${command}`])]);
    setValue("");
  };

  return (
    <div className="h-full bg-[#0b0c0f] px-6 py-5 font-mono text-[14px] text-emerald-300">
      <div className="native-scroll h-full overflow-y-auto">
        {lines.map((line, index) => (
          <motion.p key={`${line}-${index}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-[22px] whitespace-pre-wrap">
            {line}
          </motion.p>
        ))}
        <form onSubmit={run} className="mt-2 flex items-center gap-2">
          <span>$</span>
          <input
            value={value}
            onChange={(event) => setValue(event.target.value)}
            autoFocus
            className="flex-1 bg-transparent text-emerald-200 outline-none"
            aria-label="Terminal command"
          />
        </form>
      </div>
    </div>
  );
}

function SettingsApp() {
  const { settings, setTheme, setAccent, setWallpaper, setAnimationSpeed, setGlassIntensity } = usePortfolioStore();

  return (
    <ContentScroll>
      <div className="space-y-4">
        <InfoRow label="Appearance">
          <div className="mt-3 grid grid-cols-2 gap-2">
            {(["dark", "light"] as const).map((theme) => (
              <button key={theme} type="button" onClick={() => setTheme(theme)} className={cn("settings-button", settings.theme === theme && "settings-button-active")}>
                {theme}
              </button>
            ))}
          </div>
        </InfoRow>
        <InfoRow label="Accent Colors">
          <div className="mt-3 flex gap-3">
            {(["blue", "purple", "green", "pink"] as const).map((accent) => (
              <button
                key={accent}
                type="button"
                onClick={() => setAccent(accent)}
                className={cn("h-9 w-9 rounded-full border-2 border-white/10", settings.accent === accent && "ring-2 ring-white/70")}
                style={{ background: accent }}
                aria-label={`${accent} accent`}
              />
            ))}
          </div>
        </InfoRow>
        <InfoRow label="Wallpaper">
          <div className="mt-3 grid grid-cols-3 gap-2">
            {(["sonoma", "midnight", "aurora"] as const).map((wallpaper) => (
              <button key={wallpaper} type="button" onClick={() => setWallpaper(wallpaper)} className={cn("settings-button", settings.wallpaper === wallpaper && "settings-button-active")}>
                {wallpaper}
              </button>
            ))}
          </div>
        </InfoRow>
        <InfoRow label="Animation Speed" value={`${settings.animationSpeed.toFixed(1)}x`}>
          <input className="mt-4 w-full accent-appleBlue" type="range" min="0.6" max="1.4" step="0.1" value={settings.animationSpeed} onChange={(event) => setAnimationSpeed(Number(event.target.value))} />
        </InfoRow>
        <InfoRow label="Glass Intensity" value={`${Math.round(settings.glassIntensity * 100)}%`}>
          <input className="mt-4 w-full accent-appleBlue" type="range" min="0.68" max="0.96" step="0.01" value={settings.glassIntensity} onChange={(event) => setGlassIntensity(Number(event.target.value))} />
        </InfoRow>
      </div>
    </ContentScroll>
  );
}
