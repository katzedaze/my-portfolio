import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import React from 'react'

const experiences = [
  { year: "2020 - 現在", title: "シニアウェブデベロッパー", company: "テックイノベーション株式会社" },
  { year: "2018 - 2020", title: "UIデザイナー", company: "クリエイティブソリューションズ株式会社" },
  { year: "2016 - 2018", title: "ジュニアフロントエンド開発者", company: "ウェブスタートアップ株式会社" },
]

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-muted">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">職歴</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{exp.year}</p>
                <p className="font-medium">{exp.company}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
