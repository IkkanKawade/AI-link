// ==============================
// AI Project Links – Simple Card Generator (no tool tabs)
// ==============================
// How to add a new project:
//  title:  表示名
//  url:    リンク先
//  category: カテゴリー名（上部のボタンと一致させてください）
//  description: カード内に表示する簡単な説明（任意）
//
// 例:
// {
//   title: "My AI App",
//   url:   "https://example.com",
//   category: "ツール系",
//   description: "ChatGPT を活用したブラウザ拡張"
// }

// ---------------------------------
// 1. プロジェクトデータ
// ---------------------------------
const projects = [
  {
    title: "T78 Share House",
    category: "サイト系",
    description: "シェアハウス宿泊予約サイト",
    url: "https://t78sharehouse.netlify.app/"
  },
  {
    title: "Nomad X",
    category: "サイト系",
    description: "AI時代を見据えた次世代の海外ノマド育成スクール",
    url: "https://nomad-x.vercel.app/"
  },
  {
    title: "English Article Analyzer",
    category: "ツール系",
    description: "英文記事を解析・翻訳するツール",
    url: "https://english-article-analyzer-560580169825.us-west1.run.app/"
  },
  {
    title: "Bi-English Article Narrator & Translator",
    category: "ツール系",
    description: "英文記事を読み上げ・翻訳するツール",
    url: "https://bi-english-article-narrator-translator-560580169825.us-west1.run.app/"
  },
  {
    title: "Pomodoro Timer Game",
    category: "ゲーム系",
    description: "ゲーム感覚で時間管理するポモドーロタイマー",
    url: "https://ikkankawade.github.io/pomodoro-timer/"
  },
  {
    title: "英語パートナー (Clean UI)",
    category: "ツール系",
    description: "英語学習を支援する AI チューター",
    url: "https://eigo-partner-clean.vercel.app/"
  },
  {
    title: "Ikkan AI",
    category: "サイト系",
    description: "ポートフォリオ兼ブログサイト",
    url: "https://www.ikkan-ai.com/"
  },
  {
    title: "Nomad Morning LP",
    category: "サイト系",
    description: "海外ノマド・フリーランスのための朝活コミュニティ LP",
    url: "https://nomad-moaning-lp.vercel.app/"
  },
  {
    title: "Number Guessing Game",
    category: "ゲーム系",
    description: "数字当てゲーム",
    url: "https://ikkankawade.github.io/number-guessing-game/"
  },
  {
    title: "Shooting Game",
    category: "ゲーム系",
    description: "シューティングゲーム",
    url: "https://shooting-lac.vercel.app/"
  },
  {
    title: "AI Auto Check Tool",
    category: "業務効率化",
    description: "業務チェックを自動化する AI ツール",
    url: "https://ai-auto-checktool.vercel.app/"
  },
  {
    title: "Launch Methods AI",
    category: "Webサービス",
    description: "AI活用のローンチ支援サービス",
    url: "https://launch-methods-ai.vercel.app/"
  },
  {
    title: "AI Launch くん",
    category: "Webサービス",
    description: "AIでスタートアップの立ち上げを支援",
    url: "https://ai-launch-kun.com/"
  }
];

// ---------------------------------
// 2. カード生成
// ---------------------------------
function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card";
  card.dataset.category = project.category;

  const title = document.createElement("h2");
  title.textContent = project.title;
  card.appendChild(title);

  const link = document.createElement("a");
  link.href = project.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "サイトを見る →";
  card.appendChild(link);

  if (project.description) {
    const desc = document.createElement("p");
    desc.textContent = project.description;
    card.appendChild(desc);
  }

  return card;
}

function renderProjects(filter = "all") {
  const container = document.getElementById("projects");
  container.innerHTML = "";
  projects
    .filter(p => filter === "all" || p.category === filter)
    .forEach(p => container.appendChild(createProjectCard(p)));
}

// ---------------------------------
// 3. フィルタータブの挙動
// ---------------------------------
function setupCategoryTabs() {
  const tabs = document.querySelectorAll(".category-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // active クラスの付け替え
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      // カテゴリに応じて再描画
      const category = tab.dataset.category;
      renderProjects(category);
    });
  });
}

// ---------------------------------
// 4. 年号をフッターに出力
// ---------------------------------
function setCurrentYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

// ---------------------------------
// 5. 初期化
// ---------------------------------
window.addEventListener("DOMContentLoaded", () => {
  setupCategoryTabs();
  renderProjects();
  setCurrentYear();
});
