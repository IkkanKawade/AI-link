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
    url: "https://nomad-moaning-lp.vercel.app/"
  },
  {
    title: "Number Guessing Game",
    category: "ゲーム系",
    description: "数字当てゲーム",
    url: "https://ikkankawade.github.io/number-guessing-game/",
    tools: ["HTML", "CSS", "JavaScript", "GitHub Pages"]
  },
  {
    title: "Shooting Game",
    category: "ゲーム系",
    description: "シューティングゲーム",
    url: "https://shooting-lac.vercel.app/"
  }
];

function createProjectCard(project) {
  // 汎用ツール配列を生成 & ホスティング自動判定
  const tools = [...(project.tools || [])];
  const urlLower = project.url.toLowerCase();
  let hosting = "";
  if (urlLower.includes("vercel.app")) hosting = "Vercel";
  else if (urlLower.includes("netlify.app") || urlLower.includes("windsurf.build")) hosting = "Netlify";
  else if (urlLower.includes("github.io")) hosting = "GitHub Pages";
  if (hosting && !tools.includes(hosting)) tools.push(hosting);

  const card = document.createElement("article");
  card.className = "project-card";

  // タイトル
  const h2 = document.createElement("h2");
  h2.textContent = project.title;
  card.appendChild(h2);

  // タブヘッダー
  const tabHeader = document.createElement("div");
  tabHeader.className = "tab-header";
  const overviewBtn = document.createElement("button");
  overviewBtn.className = "tab-btn active";
  overviewBtn.textContent = "概要";
  const toolsBtn = document.createElement("button");
  toolsBtn.className = "tab-btn";
  toolsBtn.textContent = "使用ツール";
  tabHeader.appendChild(overviewBtn);
  tabHeader.appendChild(toolsBtn);
  card.appendChild(tabHeader);

  // タブ内容
  const overviewDiv = document.createElement("div");
  overviewDiv.className = "tab-content";
  const descP = document.createElement("p");
  descP.textContent = project.description;
  const linkA = document.createElement("a");
  linkA.href = project.url;
  linkA.target = "_blank";
  linkA.rel = "noopener";
  linkA.textContent = "リンクを見る";
  overviewDiv.appendChild(descP);
  overviewDiv.appendChild(linkA);

  const toolsDiv = document.createElement("div");
  toolsDiv.className = "tab-content";
  const toolsList = document.createElement("div");
  toolsList.className = "tools-list";
  tools.forEach(t => {
    const span = document.createElement("span");
    span.className = "tool-badge";
    span.textContent = t;
    toolsList.appendChild(span);
  });
  toolsDiv.appendChild(toolsList);

  card.appendChild(overviewDiv);
  card.appendChild(toolsDiv);

  // 切替ロジック
  overviewBtn.addEventListener("click", () => {
    overviewBtn.classList.add("active");
    toolsBtn.classList.remove("active");
    overviewDiv.style.display = "block";
    toolsDiv.style.display = "none";
  });
  toolsBtn.addEventListener("click", () => {
    toolsBtn.classList.add("active");
    overviewBtn.classList.remove("active");
    toolsDiv.style.display = "block";
    overviewDiv.style.display = "none";
  });

  // 初期表示
  overviewDiv.style.display = "block";
  toolsDiv.style.display = "none";

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
