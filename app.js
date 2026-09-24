const overlay=document.getElementById("searchOverlay");

const escapeHTML=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c]));

async function loadArchive(){
  try{
    const res=await fetch("data/seed.json");
    if(!res.ok) throw new Error("Archive unavailable");
    const db=await res.json();
    const films=db.records.filter(r=>r.entity_type==="film");
    const people=db.records.filter(r=>r.entity_type==="person");
    const events=db.records.filter(r=>r.entity_type==="event");

    document.getElementById("filmGrid").innerHTML=films.slice(0,6).map((f,i)=>`<article class="film film-${i%3}" data-search="${escapeHTML(f.name)} ${escapeHTML(f.language?.join(" "))}"><span class="year">${f.year??"—"} · ${escapeHTML(f.status)}</span><h3>${escapeHTML(f.name)}</h3><p>${escapeHTML(f.language?.join(" · ")||"Cinema")}</p></article>`).join("");

    document.getElementById("peopleStrip").innerHTML=people.slice(0,4).map((p,i)=>`<article class="person" data-search="${escapeHTML(p.name)}"><div class="portrait"></div><h3>${escapeHTML(p.name)}</h3><p>${escapeHTML(p.roles?.join(" · ")||"FILM FRATERNITY")}</p></article>`).join("");

    const eventList=document.querySelector(".event-list");
    if(eventList&&events.length) eventList.innerHTML=events.map(e=>`<article><time>${escapeHTML(e.date||"UPCOMING")}</time><div><h3>${escapeHTML(e.name)}</h3><p>${escapeHTML(e.city||"Bihar")} · ${escapeHTML(e.summary||"Cinema event")}</p></div><a href="${escapeHTML(e.sources?.[0]?.url||"#")}" target="_blank" rel="noreferrer">Source →</a></article>`).join("");

    document.querySelector(".search-overlay p").textContent=`${db.records.length} research records indexed · source-linked · ${db.version}`;

    const input=document.getElementById("searchInput");
    input.addEventListener("input",()=>searchArchive(input.value,db.records));
  }catch(err){
    console.error(err);
  }
}

function searchArchive(query,records){
  const q=query.trim().toLowerCase();
  if(!q){document.querySelectorAll("[data-search]").forEach(el=>el.hidden=false);return;}
  document.querySelectorAll("[data-search]").forEach(el=>{el.hidden=!el.dataset.search.toLowerCase().includes(q)});
}

document.getElementById("searchToggle").onclick=()=>{overlay.hidden=false;document.getElementById("searchInput").focus()};
document.getElementById("searchClose").onclick=()=>overlay.hidden=true;
document.addEventListener("keydown",e=>{if(e.key==="Escape")overlay.hidden=true});
loadArchive();