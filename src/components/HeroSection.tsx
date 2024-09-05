import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <section className="relative pb-20 pt-36">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <Avatar className="h-32 w-32 mb-8">
          <AvatarImage src="/avatar.png" alt="Avatar" />
          <AvatarFallback>AA</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          クリエイティブな<br />ウェブデザイナー
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground mt-6 mb-8">
          アイデアを形にする、そして、形からさらなるアイデアを生み出す。それが私の創造サイクルです。
        </p>
        <div className="space-x-4">
          <Button size="lg" asChild>
            <a href="#works">作品を見る</a>
          </Button>
          <Button size="lg" variant="outline">
            履歴書をダウンロード
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
