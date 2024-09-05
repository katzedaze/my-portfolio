import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React from 'react'

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-12">お問い合わせ</h2>
        <form className="space-y-8">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">お名前</label>
            <Input id="name" placeholder="山田 太郎" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">メールアドレス</label>
            <Input id="email" type="email" placeholder="taro@example.com" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">メッセージ</label>
            <Textarea id="message" placeholder="お問い合わせ内容をご記入ください" />
          </div>
          <Button type="submit" className="w-full">送信</Button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
