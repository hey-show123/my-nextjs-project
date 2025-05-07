"use client"

import { motion } from "framer-motion"
import { Code, ExternalLink, Github, Tag } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  type: string
  sourceCode: string
  liveDemo: string
}

const projects: Project[] = [
  {
    title: "Personal Blog",
    description: "日々の開発記録や技術的な発見を共有するブログ。最近は特にRustとGoの学習過程、WebAssemblyの実験結果、新しいNext.js 13の機能検証などについて執筆。また、質量分析に関する研究成果や、プログラミングと化学の融合に関する考察も定期的に投稿しています。",
    image: "https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "MDX", "TailwindCSS", "Vercel"],
    type: "web",
    sourceCode: "https://github.com",
    liveDemo: "https://example.com",
  },
  {
    title: "Chemistry Data Analyzer",
    description: "Pythonとmatplotlibを使用した質量分析データの解析・可視化ツール。機械学習アルゴリズムを活用して複雑なデータセットからパターンを特定し、研究目的のインタラクティブな可視化を生成します。最近はJavaScriptとTypeScriptも活用してWebインターフェースを改善中。",
    image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Python", "pandas", "matplotlib", "scikit-learn", "Flask"],
    type: "data",
    sourceCode: "https://github.com",
    liveDemo: "https://example.com",
  },
  {
    title: "Task Management App",
    description: "React NativeとFirebaseで構築したタスク管理アプリ。KotlinとSwiftの知識を活かしてネイティブ機能も実装。タスクの作成、完了トラッキング、期限リマインダー、カテゴリ管理などの機能を搭載。",
    image: "https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React Native", "Firebase", "Redux", "Expo"],
    type: "mobile",
    sourceCode: "https://github.com",
    liveDemo: "https://example.com",
  },
  {
    title: "E-commerce Platform",
    description: "MERN stackで構築したフルスタックECプラットフォーム。TypeScriptとNext.jsを使用してフロントエンド、Node.jsとExpressでバックエンドを実装。最近はGoとRustを使った新機能の開発も検討中。",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
    type: "web",
    sourceCode: "https://github.com",
    liveDemo: "https://example.com",
  },
  {
    title: "Weather Forecast App",
    description: "複数の気象APIを使用したリアルタイム天気予報アプリ。JavaScriptとTypeScriptを使用してフロントエンド開発、バックエンドはPythonとFastAPIで構築。位置情報ベースの天気予報、7日間予報、気象警報機能を実装。",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "OpenWeather API", "ChartJS", "Geolocation"],
    type: "web",
    sourceCode: "https://github.com",
    liveDemo: "https://example.com",
  },
  {
    title: "Research Data Visualization",
    description: "D3.jsとReactを使用した科学研究データの可視化ダッシュボード。TypeScriptで型安全性を確保し、Pythonで前処理を行うハイブリッドなアプローチを採用。研究者がカスタマイズ可能なチャートやグラフを通じて複雑なデータセットを探索できます。",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["D3.js", "React", "TypeScript", "CSV Parsing", "SVG Animation"],
    type: "data",
    sourceCode: "https://github.com",
    liveDemo: "https://example.com",
  },
  {
    title: "Fitness Tracking App",
    description: "FlutterとFirebaseを使用したフィットネストラッキングアプリ。KotlinとSwiftの知識を活かしてネイティブ機能も実装。運動ライブラリ、進捗チャート、パーソナライズされたレコメンデーション機能を搭載。",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Flutter", "Firebase", "HealthKit", "Google Fit"],
    type: "mobile",
    sourceCode: "https://github.com",
    liveDemo: "https://example.com",
  },
  {
    title: "AI Study Assistant",
    description: "PythonとTensorFlowを使用した教育支援AI。JavaScriptとTypeScriptでフロントエンド開発、Rustで高性能な計算処理を実装。ユーザー提供のコンテンツやトピックに基づいて学習教材、練習問題、解説を生成します。",
    image: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Python", "TensorFlow", "NLP", "Flask", "React"],
    type: "ai",
    sourceCode: "https://github.com",
    liveDemo: "https://example.com",
  },
  {
    title: "Molecular Structure Viewer",
    description: "WebGLとThree.jsを使用した3D分子構造ビューワー。TypeScriptで型安全性を確保し、Pythonで分子計算を処理。一般的な分子ファイル形式をサポートし、分析機能を提供します。最近はRustを使用してパフォーマンスを改善中。",
    image: "https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["WebGL", "Three.js", "JavaScript", "Chemistry", "3D Rendering"],
    type: "science",
    sourceCode: "https://github.com",
    liveDemo: "https://example.com",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-24 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">プロジェクト一覧</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            個人開発や趣味のプロジェクトのポートフォリオです。様々なプログラミング言語やフレームワークを活用して、実践的なアプリケーションを開発しています。
          </p>
        </div>
        
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="w-full max-w-md mx-auto mb-8 grid grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="all">すべて</TabsTrigger>
            <TabsTrigger value="web">Web</TabsTrigger>
            <TabsTrigger value="mobile">モバイル</TabsTrigger>
            <TabsTrigger value="data">データ</TabsTrigger>
            <TabsTrigger value="other">その他</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <ProjectGrid projects={projects} />
          </TabsContent>
          <TabsContent value="web">
            <ProjectGrid projects={projects.filter(p => p.type === 'web')} />
          </TabsContent>
          <TabsContent value="mobile">
            <ProjectGrid projects={projects.filter(p => p.type === 'mobile')} />
          </TabsContent>
          <TabsContent value="data">
            <ProjectGrid projects={projects.filter(p => p.type === 'data')} />
          </TabsContent>
          <TabsContent value="other">
            <ProjectGrid projects={projects.filter(p => !['web', 'mobile', 'data'].includes(p.type))} />
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}

function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          className="transform transition-all duration-300"
        >
          <Card className="h-full flex flex-col overflow-hidden border-2 hover:border-primary/50 transition-colors">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-2 right-2">
                <Badge variant="secondary" className="flex items-center space-x-1 shadow-md">
                  <Tag className="h-3 w-3" />
                  <span className="capitalize">{project.type}</span>
                </Badge>
              </div>
            </div>
            <CardContent className="flex-grow pt-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-2 flex justify-between border-t">
              <Button asChild variant="ghost" size="sm">
                <a href={project.sourceCode} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  コード
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href={project.liveDemo} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  デモ
                </a>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}