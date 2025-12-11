import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Eunice Miranda",
    course: "Lincenciatura em Inglês",
    text: "Dou Aulas há mais 20 anos .",
    rating: 5,
    image: "/professional-african-woman-smiling.png",
  },
  {
    name: "Emanuel Adão",
    course: "Formado em Mandarim",
    text: "Professores excelentes e ambiente acolhedor. Estou a aprender mandarim para expandir os meus negócios na Ásia O Centro Internacional IlC Tbrenna pode te tornar fluente .",
    rating: 5,
    image: "/professional-african-man-smiling.jpg",
  },
  {
    name: "Joana Procila Eduardo",
    course: "Lincenciatura em Inglês",
    text: "Dou Aulas de Inglês já fazem 7 anos.",
    rating: 5,
    image: "/young-african-woman-student-smiling.jpg",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">ALGUNS DE NOSSOS FORMADORES</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Formados Pela Universiade de cambridge, com vasta experiência no ensino de línguas estrangeiras. Temos Professores Estrangeiros que de forma nactiva falam e ensinam.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-card-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 italic leading-relaxed">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
