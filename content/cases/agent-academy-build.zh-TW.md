# 案例 1:一個 Agent 如何設計這個網站

這是設計課程的第一個案例,完整記錄 Agent Academy 本身的設計過程,方便其他 Agent 在自己的專案裡照做。下文所有參考都是 UI Resource Hub 裡的真實檔案,沒有編造。

![改造前:同一頁面不加樣式表](/assets/case/before.webp)

![改造後:上線的首頁](/assets/case/after.webp)

## 1. 需求
- 讀者:為某個崗位挑選機器人的人,以及讀取本站的 Agent。
- 首頁任務:展示站內有什麼(3 個已開課學院、真實資源、每日更新流),並給出一段可直接複製的提示詞。
- 約束:10 種語言,淺色和深色,長連結絕不溢位,所有卡片內邊距一致,炫但剋制,支援減少動態效果。
- 禁用風格:米紙 + 橙、Carbon 灰、Instrument + 檸檬綠、姊妹站的墨黑 + 金屬感,以及 UI Hub 的午夜藍 + 青色。

## 2. 先聚類,再選擇
Agent 先統計了 UI Hub `data.json`(本地 2,376 條)裡的全部視覺風格標籤,而不是從個人偏好出發:

| 風格簇 | 條目 | 結論 |
|---|---|---|
| minimal | 1031 | 只借正文排版的剋制 |
| enterprise | 805 | 放棄:後臺管理感 |
| material | 326 | 放棄:系統元件感 |
| motion | 152 | 保留:動效語彙 |
| dark-tech | 102 | 部分保留 |
| gradient / 3d | 78 / 67 | 只保留單色顆粒漸變 |
| editorial | 25 | 保留:便當格索引、密集瀑布流 |

最終交集:編輯感 x 動效 x 漸變。

## 3. 開啟真實預覽圖(27 張)
硬性門檻:至少開啟並記錄 6 張預覽圖之前,不寫任何 CSS。實際開啟了 27 張,包括 `previews/site/tympanus-net-codrops.webp`、`previews/skiper-ui-com.webp`、`previews/ui-lukacho-com.webp`、`previews/rive-app.webp`、`previews/backgrounds-supply.webp`、`previews/rareui-com.webp`、`previews/cs/cs2-magicui-design--background--orbiting-circles--v0.webp`、`previews/cs/cs2-magicui-design--background--shine-border--v0.webp` 和 `previews/cs/cs-ui-aceternity-com-card.webp`。

每個借用元素都記下了元件庫、預覽路徑、色值、圓角、陰影、字型和動效型別。例如首屏的細線波紋來自 Lukacho UI(`previews/ui-lukacho-com.webp`),墨色 10% 到 22% 的細線,只用 transform 緩慢漂移。

## 4. 三個方向,選定一個
| 方案 | 來源 | 結果 |
|---|---|---|
| A. 校園便當格 | Codrops 便當格、Skiper 徽章、Lukacho 線條、Magic UI 軌道 + 流光邊框 + 跑馬燈、Aceternity 3D 卡片 | **選定**:主題(有學院的學校)決定佈局;三種學院色加中性色 |
| B. 夜間舞臺 | Aceternity 聚光燈、金屬標題、拼貼 | 放棄:像姊妹站換皮,而且只有深色 |
| C. 畫素終端 | Cult UI 畫素字型、Magic UI 細網格、命令列條 | 放棄:把首頁變成表單,等寬標籤和細網格是典型 AI 痕跡 |

## 5. 設計令牌
- 底色 `#ECECEF` / `#0D0D11`,卡面 `#FFFFFF` / `#16161C`,文字 `#15151B` / `#F0F0F4`,次要文字 `#575764` / `#A3A3B2`,連結 `#3340E6` / `#9AA3FF`。
- 學院顆粒漸變:客服 `#3A47F5` 到 `#0E3A44`(Codrops 封面),營銷 `#E0457B` 到 `#3B0A22`(Backgrounds Supply),設計 `#FF5A1F` 花瓣配 `#17171A`(Rare UI)。
- 字型:標題用 Archivo 可變字型 800(類似 Codrops 和 Skiper 的寬體無襯線),正文 Geist,只有真實程式碼用 Geist Mono。
- 圓角按層級:14 / 8 / 6 / 999。卡片內邊距只有一個令牌:18px(手機 16px)。

## 6. 動效預算
徽章旋轉 48 秒,兩條軌道 40 秒和 60 秒,背景線條漂移 18 秒,快速上手卡片的流光邊框 7 秒,跑馬燈 60 秒且懸停或聚焦時暫停,課程鏈在滾動進入視野時自動走一遍,改造前後對比帶 6 度傾斜。只動 transform、opacity 和 background-position。開啟“減少動態效果”時全部停止,離開視野的迴圈動畫透過 IntersectionObserver 暫停。

## 7. 驗證
- 在 1440 和 390 寬度、淺色和深色下截圖,檢查溢位、內邊距不一致和對比度。
- 對構建結果執行 Lighthouse,修復後重跑直到分數穩定。
- 每張資源卡都連結到原始來源;每個課程檔案都是能開啟的 GitHub raw 連結。

## 複用這套方法
1. 先寫需求和禁用風格。
2. 選風格前先統計 UI Hub `api/resources.json` 的風格簇。
3. 至少開啟 6 張預覽圖,為每個借用元素記下路徑、色值、圓角、陰影、字型、動效。
4. 畫出三個方向,選一個,並寫明另外兩個為什麼落選。
5. 先令牌,再元件,最後動效;檢查減少動態效果。
6. 桌面和手機、兩種主題分別截圖,修復,跑 Lighthouse,重複。
