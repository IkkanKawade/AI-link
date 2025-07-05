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
  // サンプルデータ（必要に応じて編集してください）
  {
    title: "ChatGPT プラグイン検索サイト",
    url: "https://gptplugindirectory.vercel.app/",
    category: "サイト系",
    description: "ChatGPT プラグインをカテゴリー別に探せるサイト。"
  },
  {
    title: "Stable Diffusion WebUI 日本語版",
    url: "https://github.com/ik-example/sd-webui-jp",
    category: "ツール系",
    description: "画像生成 AI を日本語 UI で簡単操作。"
  },
  {
    title: "AI Quiz Game",
    url: "https://aiquizgame.netlify.app/",
    category: "ゲーム系",
    description: "生成系 AI が出題するクイズゲーム。"
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
