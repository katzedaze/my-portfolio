import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import React from 'react'

const works = [
  { title: "プロジェクト1", description: "Reactを使用したウェブアプリケーション", imageUrl: "/project1.jpg" },
  { title: "プロジェクト2", description: "WordPressテーマのカスタマイズ", imageUrl: "/project2.jpg" },
  { title: "プロジェクト3", description: "モバイルアプリのUIデザイン", imageUrl: "/project3.jpg" },
]

const WorksSection: React.FC = () => {
  return (
    <section id="works" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">作品集</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <Card key={index} className="overflow-hidden">
              <img src={work.imageUrl} alt={work.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{work.title}</CardTitle>
                <CardDescription>{work.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline">詳細を見る</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorksSection
