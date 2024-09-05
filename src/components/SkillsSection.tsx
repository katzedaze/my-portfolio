import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import React from 'react'

const skills = [
  { name: "フロントエンド開発", proficiency: 90, description: "HTML, CSS, JavaScript, React, Vue.js" },
  { name: "UIデザイン", proficiency: 85, description: "Figma, Adobe XD, Sketch" },
  { name: "アニメーション", proficiency: 75, description: "CSS Animations, GreenSock, Lottie" },
]

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">スキルセット</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{skill.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">{skill.description}</p>
                <Progress value={skill.proficiency} className="w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
