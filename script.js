// AI project links data. ここに事例を追加してください。
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
    url: "https://nomad-morning-lp.windsurf.build/"
  },
  {
    title: "Number Guessing Game",
    category: "ゲーム系",
    description: "数字当てゲーム",
    url: "https://ikkankawade.github.io/number-guessing-game/",
    steps: [
      "企画",
      "HTML/CSS 作成",
      "JavaScript 実装",
      "GitHub Pages へデプロイ"
    ]
  },
  {
    title: "Shooting Game",
    category: "ゲーム系",
    description: "シューティングゲーム",
    url: "https://shooting-lac.vercel.app/"
  }
];

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";

  const h2 = document.createElement("h2");
  h2.textContent = project.title;

  const p = document.createElement("p");
  p.textContent = project.description;

  const link = document.createElement("a");
  link.href = project.url;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = "リンクを見る";

  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(link);

  // 開発手順 (steps) toggle
  if (project.steps && project.steps.length) {
    const toggleBtn = document.createElement("button");
    toggleBtn.className = "steps-toggle";
    toggleBtn.textContent = "開発手順 ▼";

    const stepsDiv = document.createElement("div");
    stepsDiv.className = "steps-container";
    stepsDiv.style.display = "none";

    const ol = document.createElement("ol");
    project.steps.forEach(step => {
      const li = document.createElement("li");
      li.textContent = step;
      ol.appendChild(li);
    });
    stepsDiv.appendChild(ol);

    toggleBtn.addEventListener("click", () => {
      const hidden = stepsDiv.style.display === "none";
      stepsDiv.style.display = hidden ? "block" : "none";
      toggleBtn.textContent = hidden ? "開発手順 ▲" : "開発手順 ▼";
    });

    card.appendChild(toggleBtn);
    card.appendChild(stepsDiv);
  }

  return card;
}

function renderProjects(filter = "all") {
  const container = document.getElementById("projects");
  container.innerHTML = "";
  projects
    .filter(p => filter === "all" || p.category === filter)
    .forEach(prj => {
    container.appendChild(createProjectCard(prj));
  });
}

function setYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

function setupCategoryTabs() {
  document.querySelectorAll(".category-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".category-tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.category;
      renderProjects(cat);
    });
  });
}


// Initialize site
renderProjects();
setupCategoryTabs();
setYear();
