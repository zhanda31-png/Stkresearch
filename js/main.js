// Industry valuation data
const valuationData = [
  {name:"银行",count:42,pe:6.79,pb:0.65,div:"5.55%",pct:0,qual:"低估",sector:"金融地产"},
  {name:"非银金融",count:82,pe:10.12,pb:1.23,div:"2.41%",pct:3.3,qual:"低估",sector:"金融地产"},
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
  {name:"基础化工",count:409,pe:28.20,pb:2.59,div:"1.42%",pct:56.7,qual:"中性",sector:"制造周期"},
  {name:"传媒",count:130,pe:28.21,pb:2.31,div:"2.20%",pct:60,qual:"中性",sector:"消费医药"},
  {name:"医药生物",count:480,pe:28.73,pb:2.64,div:"1.74%",pct:63.3,qual:"中性",sector:"消费医药"},
  {name:"农林牧渔",count:104,pe:30.18,pb:2.24,div:"2.16%",pct:66.7,qual:"中性",sector:"消费医药"},
  {name:"美容护理",count:29,pe:31.12,pb:2.61,div:"2.24%",pct:70,qual:"中性",sector:"消费医药"},
  {name:"通信",count:123,pe:32.27,pb:3.06,div:"1.96%",pct:73.3,qual:"高估",sector:"科技TMT"},
  {name:"社会服务",count:81,pe:33.52,pb:2.55,div:"1.60%",pct:76.7,qual:"高估",sector:"消费医药"},
  {name:"建筑材料",count:72,pe:34.61,pb:1.93,div:"2.62%",pct:80,qual:"高估",sector:"制造周期"},
  {name:"电力设备",count:369,pe:37.41,pb:4.03,div:"1.06%",pct:83.3,qual:"高估",sector:"能源金属"},
  {name:"机械设备",count:535,pe:41.98,pb:3.55,div:"1.15%",pct:86.7,qual:"高估",sector:"制造周期"},
  {name:"计算机",count:334,pe:54.10,pb:4.46,div:"0.97%",pct:90,qual:"高估",sector:"科技TMT"},
  {name:"国防军工",count:140,pe:65.39,pb:4.25,div:"0.54%",pct:93.3,qual:"高估",sector:"科技TMT"},
  {name:"电子",count:484,pe:70.66,pb:7.30,div:"0.44%",pct:96.7,qual:"高估",sector:"科技TMT"},
  {name:"综合",count:15,pe:132.10,pb:4.96,div:"0.58%",pct:100,qual:"高估",sector:"制造周期"}
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
    <tr data-qual="${d.qual}">
      <td><strong>${d.name}</strong></td>
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

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderValuationTable();
});
