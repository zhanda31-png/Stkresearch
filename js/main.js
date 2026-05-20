// Industry valuation data
const valuationData = [
  {name:"银行",count:42,pe:6.79,pb:0.65,div:"5.55%",pct:0,qual:"低估",sector:"金融地产"},
  {name:"非银金融",count:82,pe:10.12,pb:1.23,div:"2.41%",pct:3.3,qual:"低估",sector:"金融地产",holdings:"中金+信达"},
  {name:"建筑装饰",count:156,pe:11.84,pb:0.76,div:"2.78%",pct:6.7,qual:"低估",sector:"金融地产"},
  {name:"房地产",count:99,pe:12.63,pb:1.14,div:"1.74%",pct:10,qual:"低估",sector:"金融地产"},
  {name:"石油石化",count:47,pe:15.14,pb:1.42,div:"3.61%",pct:13.3,qual:"低估",sector:"能源金属"},
  {name:"交通运输",count:126,pe:15.48,pb:1.26,div:"3.45%",pct:16.7,qual:"低估",sector:"制造周期"},
  {name:"家用电器",count:94,pe:16.59,pb:2.45,div:"3.78%",pct:20,qual:"低估",sector:"消费医药"},
  {name:"钢铁",count:44,pe:18.60,pb:1.03,div:"2.18%",pct:23.3,qual:"低估",sector:"能源金属"},
  {name:"煤炭",count:37,pe:18.73,pb:1.71,div:"4.93%",pct:26.7,qual:"低估",sector:"能源金属"},
  {name:"食品饮料",count:124,pe:20.91,pb:3.64,div:"4.47%",pct:30,qual:"低估",sector:"消费医药"},
  {name:"公用事业",count:131,pe:21.24,pb:1.98,div:"2.48%",pct:33.3,qual:"中性",sector:"能源金属"},
  {name:"纺织服饰",count:107,pe:21.55,pb:1.81,div:"3.59%",pct:36.7,qual:"中性",sector:"消费医药"},
  {name:"有色金属",count:142,pe:21.81,pb:3.69,div:"1.27%",pct:40,qual:"中性",sector:"能源金属"},
  {name:"环保",count:133,pe:24.04,pb:1.77,div:"1.79%",pct:43.3,qual:"中性",sector:"制造周期"},
  {name:"商贸零售",count:99,pe:25.53,pb:2.10,div:"1.79%",pct:46.7,qual:"中性",sector:"消费医药"},
  {name:"轻工制造",count:158,pe:25.76,pb:2.33,div:"2.34%",pct:50,qual:"中性",sector:"制造周期"},
  {name:"汽车",count:286,pe:26.76,pb:2.47,div:"1.64%",pct:53.3,qual:"中性",sector:"制造周期"},
  {name:"基础化工",count:409,pe:28.20,pb:2.59,div:"1.42%",pct:56.7,qual:"中性",sector:"制造周期",holdings:"彤程+航锦"},
  {name:"传媒",count:130,pe:28.21,pb:2.31,div:"2.20%",pct:60,qual:"中性",sector:"消费医药",holdings:"奥飞"},
  {name:"医药生物",count:480,pe:28.73,pb:2.64,div:"1.74%",pct:63.3,qual:"中性",sector:"消费医药"},
  {name:"农林牧渔",count:104,pe:30.18,pb:2.24,div:"2.16%",pct:66.7,qual:"中性",sector:"消费医药"},
  {name:"美容护理",count:29,pe:31.12,pb:2.61,div:"2.24%",pct:70,qual:"中性",sector:"消费医药"},
  {name:"通信",count:123,pe:32.27,pb:3.06,div:"1.96%",pct:73.3,qual:"高估",sector:"科技TMT"},
  {name:"社会服务",count:81,pe:33.52,pb:2.55,div:"1.60%",pct:76.7,qual:"高估",sector:"消费医药"},
  {name:"建筑材料",count:72,pe:34.61,pb:1.93,div:"2.62%",pct:80,qual:"高估",sector:"制造周期"},
  {name:"电力设备",count:369,pe:37.41,pb:4.03,div:"1.06%",pct:83.3,qual:"高估",sector:"能源金属"},
  {name:"机械设备",count:535,pe:41.98,pb:3.55,div:"1.15%",pct:86.7,qual:"高估",sector:"制造周期"},
  {name:"计算机",count:334,pe:54.10,pb:4.46,div:"0.97%",pct:90,qual:"高估",sector:"科技TMT",holdings:"商汤(港股)"},
  {name:"国防军工",count:140,pe:65.39,pb:4.25,div:"0.54%",pct:93.3,qual:"高估",sector:"科技TMT"},
  {name:"电子",count:484,pe:70.66,pb:7.30,div:"0.44%",pct:96.7,qual:"高估",sector:"科技TMT",holdings:"安凯+通富+国光+小米"},
  {name:"综合",count:15,pe:132.10,pb:4.96,div:"0.58%",pct:100,qual:"高估",sector:"制造周期"}
];

// Holdings mapping data
const holdingsData = [
  {name:"安凯微电子",code:"688620",industry:"电子",sub:"半导体(IC设计)",shares:"10,059股",cost:12.60,price:13.75,status:"持有",source:"朋友A"},
  {name:"通富微电",code:"002156",industry:"电子",sub:"半导体(封测)",shares:"600股",cost:27.95,price:58.07,status:"持有",source:"投顾",pnl:"+108%"},
  {name:"国光电器",code:"002045",industry:"电子",sub:"消费电子(声学)",shares:"2,800股",cost:16.83,price:11.27,status:"持有",source:"投顾",pnl:"-33%"},
  {name:"小米集团-W",code:"01810.HK",industry:"电子",sub:"消费电子(手机+汽车)",shares:"14,600股",cost:28.51,price:25.31,status:"持有",source:"个人",pnl:"-7%"},
  {name:"软通动力",code:"301236",industry:"计算机",sub:"IT服务",shares:"1,700股",cost:null,price:null,status:"持有",source:"投顾5/18新签"},
  {name:"中国软件",code:"600536",industry:"计算机",sub:"软件开发",shares:"500股",cost:null,price:null,status:"持有",source:"投顾5/18新签"},
  {name:"商汤-W",code:"00020.HK",industry:"计算机",sub:"AI(视觉)",shares:"68,000股",cost:1.69,price:1.73,status:"持有",source:"朋友C"},
  {name:"中金公司",code:"601995",industry:"非银金融",sub:"证券",shares:"2,000股",cost:39.36,price:33.56,status:"持有",source:"投顾",pnl:"-15%"},
  {name:"信达证券",code:"601059",industry:"非银金融",sub:"证券+AMC",shares:"2,000股",cost:17.83,price:16.67,status:"持有",source:"朋友B",pnl:"-7%"},
  {name:"中航西飞",code:"000768",industry:"国防军工",sub:"航空装备",shares:"3,000股",cost:22.53,price:23.20,status:"持有",source:"投顾5/18新签",pnl:"+3%"},
  {name:"卫星ETF永赢",code:"159218",industry:"国防军工",sub:"跨行业ETF",shares:"20,000股",cost:0.511,price:1.867,status:"持有",source:"投顾",pnl:"+465%"},
  {name:"金禾实业",code:"002597",industry:"基础化工",sub:"化学制品",shares:"3,000股",cost:null,price:null,status:"持有",source:"投顾5/18新签"},
  {name:"奥飞娱乐",code:"002292",industry:"传媒",sub:"影视/玩具IP",shares:"13,200股",cost:10.52,price:8.32,status:"待减仓",source:"投顾蓝海",pnl:"-23%"},
  {name:"*ST天宜新材",code:"000676",industry:"综合/特殊",sub:"钢铁/重整",shares:"13,376股",cost:9.15,price:8.23,status:"持有等重整",source:"朋友A",pnl:"-10%"},
];

// Sidebar toggle
function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('open');
}

// Close sidebar on nav click (mobile)
document.addEventListener('click', (e) => {
  if (window.innerWidth <= 768 && e.target.closest('.nav-item')) {
    document.querySelector('.sidebar').classList.remove('open');
  }
});

// Back to top
window.addEventListener('scroll', () => {
  const btn = document.querySelector('.back-top');
  if (btn) btn.classList.toggle('visible', window.scrollY > 300);
});

function scrollToTop() {
  window.scrollTo({top:0, behavior:'smooth'});
}

// Sort table
function sortTable(tableId, col, type) {
  const table = document.getElementById(tableId);
  if (!table) return;
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  const th = table.querySelectorAll('thead th')[col];
  const asc = !th.classList.contains('sorted-asc');

  table.querySelectorAll('thead th').forEach(h => {
    h.classList.remove('sorted','sorted-asc','sorted-desc');
  });
  th.classList.add('sorted', asc ? 'sorted-asc' : 'sorted-desc');

  rows.sort((a, b) => {
    let va = a.cells[col].textContent.trim();
    let vb = b.cells[col].textContent.trim();
    if (type === 'num') {
      va = parseFloat(va.replace(/[^0-9.\-]/g, '')) || 0;
      vb = parseFloat(vb.replace(/[^0-9.\-]/g, '')) || 0;
    }
    if (va < vb) return asc ? -1 : 1;
    if (va > vb) return asc ? 1 : -1;
    return 0;
  });
  rows.forEach(r => tbody.appendChild(r));
}

// Filter valuation table
function filterTable(filter) {
  const table = document.getElementById('valuation-table');
  if (!table) return;
  const rows = table.querySelectorAll('tbody tr');
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');

  rows.forEach(row => {
    const qual = row.getAttribute('data-qual');
    if (filter === 'all') { row.style.display = ''; }
    else if (filter === qual) { row.style.display = ''; }
    else { row.style.display = 'none'; }
  });
}

// Search table
function searchTable(inputId, tableId) {
  const q = document.getElementById(inputId).value.toLowerCase();
  const table = document.getElementById(tableId);
  if (!table) return;
  table.querySelectorAll('tbody tr').forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(q) ? '' : 'none';
  });
}

// Qual tag helper
function qualTag(qual) {
  const cls = qual === '低估' ? 'green' : qual === '中性' ? 'yellow' : 'red';
  return `<span class="tag ${cls}">${qual === '低估' ? '🟢' : qual === '中性' ? '🟡' : '🔴'} ${qual}</span>`;
}

// Render valuation table
function renderValuationTable() {
  const tbody = document.querySelector('#valuation-table tbody');
  if (!tbody) return;
  tbody.innerHTML = valuationData.map(d => `
    <tr data-qual="${d.qual}" onclick="${d.holdings ? "window.location='nonbank-finance.html'" : ''}">
      <td><strong>${d.name}</strong>${d.holdings ? '<br><span style="font-size:11px;color:var(--accent)">✓ '+d.holdings+'</span>' : ''}</td>
      <td>${d.count}</td>
      <td>${d.pe.toFixed(2)}</td>
      <td>${d.pb.toFixed(2)}</td>
      <td>${d.div}</td>
      <td>
        <div style="display:flex;align-items:center;gap:8px">
          <div class="progress-bar" style="width:80px">
            <div class="progress-fill ${d.qual==='低估'?'green':d.qual==='中性'?'yellow':'red'}" style="width:${d.pct}%"></div>
          </div>
          <span>${d.pct}%</span>
        </div>
      </td>
      <td>${qualTag(d.qual)}</td>
      <td style="font-size:12px;color:var(--text-muted)">${d.sector}</td>
    </tr>
  `).join('');
}

// Render holdings
function renderHoldings() {
  const grid = document.getElementById('holdings-grid');
  if (!grid) return;
  grid.innerHTML = holdingsData.map(h => {
    const pnlNum = h.pnl ? parseFloat(h.pnl) : null;
    const pnlCls = pnlNum !== null ? (pnlNum >= 0 ? 'positive' : 'negative') : '';
    const statusTag = h.status === '持有' ? 'green' : h.status.includes('减仓') ? 'red' : 'yellow';
    return `
    <div class="holding-card">
      <div class="holding-header">
        <div>
          <span class="stock-name">${h.name}</span>
          <span class="stock-code">${h.code}</span>
        </div>
        <span class="tag tag-lg ${statusTag}">${h.status}</span>
      </div>
      <div class="holding-details">
        <div><span class="label">行业</span>${h.industry} · ${h.sub}</div>
        <div><span class="label">持仓</span>${h.shares}${h.cost ? ' / 成本'+h.cost : ''}</div>
        ${h.pnl ? `<div><span class="label">盈亏</span><span class="chip-pnl ${pnlCls}" style="font-weight:600">${h.pnl}</span></div>` : ''}
        <div><span class="label">来源</span>${h.source}</div>
      </div>
    </div>`;
  }).join('');
}

// Render holdings map
function renderHoldingsMap() {
  const container = document.getElementById('holdings-map');
  if (!container) return;
  const industries = {};
  holdingsData.forEach(h => {
    if (!industries[h.industry]) industries[h.industry] = [];
    industries[h.industry].push(h);
  });
  container.innerHTML = Object.entries(industries).map(([ind, stocks]) => {
    const v = valuationData.find(d => d.name === ind);
    const qualCls = v ? (v.qual === '低估' ? 'green' : v.qual === '中性' ? 'yellow' : 'red') : '';
    return `
    <div class="map-row">
      <div class="map-industry">
        ${ind}
        ${v ? `<br><span class="tag ${qualCls}" style="font-size:11px">${v.qual} ${v.pct}%</span>` : ''}
      </div>
      <div class="map-bar">
        ${stocks.map(s => {
          const pnlNum = s.pnl ? parseFloat(s.pnl) : null;
          const pnlCls = pnlNum !== null ? (pnlNum >= 0 ? 'positive' : 'negative') : '';
          return `<div class="map-chip">
            ${s.name}
            ${s.pnl ? `<span class="chip-pnl ${pnlCls}">${s.pnl}</span>` : ''}
          </div>`;
        }).join('')}
      </div>
    </div>`;
  }).join('');
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderValuationTable();
  renderHoldings();
  renderHoldingsMap();
});
