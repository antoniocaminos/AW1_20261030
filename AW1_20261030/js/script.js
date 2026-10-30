/* ============================================================
   PLATAFORMA INTERACTIVA DOM & BOM - Lógica principal
   ============================================================ */

// ---------- NAVEGACIÓN ENTRE SECCIONES ----------
let currentSection = 0;
const totalSections = 12;

function updateView() {
  // Activa la tarjeta correspondiente
  for (let i = 0; i < totalSections; i++) {
    const sec = document.getElementById("sec-" + i);
    if (sec) {
      if (i === currentSection) {
        sec.classList.add("active");
      } else {
        sec.classList.remove("active");
      }
    }
  }

  // Actualiza el menú lateral
  const menuItems = document.querySelectorAll("#sidebar .menu-item");
  menuItems.forEach((item, index) => {
    if (index === currentSection) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Reset del scroll al cambiar de vista
  const workspace = document.getElementById("workspace");
  if (workspace) workspace.scrollTop = 0;
}

function goToSection(index) {
  if (index >= 0 && index < totalSections) {
    currentSection = index;
    updateView();
  }
}

function nextSection() {
  if (currentSection < totalSections - 1) {
    currentSection++;
    updateView();
  }
}

function prevSection() {
  if (currentSection > 0) {
    currentSection--;
    updateView();
  }
}

// ---------- FUNCIONES DE LAS DEMOS (window) ----------

function runAlert() {
  window.alert("¡Mensaje emergente enviado desde window.alert()!");
}

function runConfirm() {
  let userChoice = window.confirm("¿Deseas confirmar la acción?");
  document.getElementById("out-window").textContent = "window.confirm(): " + userChoice;
}

function runPrompt() {
  let name = window.prompt("Escribe tu nombre:", "Estudiante");
  document.getElementById("out-window").textContent = "window.prompt(): " + name;
}

function runTimer() {
  document.getElementById("out-window").textContent = "Esperando 2 segundos...";
  window.setTimeout(() => {
    document.getElementById("out-window").textContent = "¡Ejecutado tras 2000ms mediante window.setTimeout()!";
  }, 2000);
}

function getDimensions() {
  let w = window.innerWidth;
  let h = window.innerHeight;
  document.getElementById("out-window").textContent = `Viewport: ${w}px de ancho x ${h}px de alto`;
}

// ---------- location ----------
function inspectLocation() {
  const loc = window.location;
  let info = `href: ${loc.href}\n` +
             `protocol: ${loc.protocol}\n` +
             `hostname: ${loc.hostname}\n` +
             `pathname: ${loc.pathname}\n` +
             `origin: ${loc.origin}`;
  const out = document.getElementById("out-location");
  out.style.whiteSpace = "pre-wrap";
  out.textContent = info;
}

function reloadPage() {
  window.location.reload();
}

// ---------- history ----------
function getHistoryLength() {
  let total = window.history.length;
  document.getElementById("out-history").textContent = "Páginas visitadas en la sesión (history.length): " + total;
}

function historyBack() {
  window.history.back();
}

// ---------- navigator ----------
function inspectNavigator() {
  const nav = window.navigator;
  let details = `Idioma (language): ${nav.language}\n` +
                `En línea (onLine): ${nav.onLine}\n` +
                `Cookies activas (cookieEnabled): ${nav.cookieEnabled}\n` +
                `User Agent: ${nav.userAgent}`;
  const out = document.getElementById("out-navigator");
  out.style.whiteSpace = "pre-wrap";
  out.textContent = details;
}

// ---------- screen ----------
function inspectScreen() {
  const sc = window.screen;
  let data = `Resolución total (width x height): ${sc.width}px x ${sc.height}px\n` +
             `Espacio disponible (availWidth x availHeight): ${sc.availWidth}px x ${sc.availHeight}px\n` +
             `Profundidad de color (colorDepth): ${sc.colorDepth} bits`;
  const out = document.getElementById("out-screen");
  out.style.whiteSpace = "pre-wrap";
  out.textContent = data;
}

// ---------- document ----------
function demoSelectors() {
  const target = document.querySelector("#out-doc-target");
  target.style.backgroundColor = "#bbf7d0";
  target.textContent = "¡Seleccionado con document.querySelector()!";
}

function demoCreate() {
  const newDiv = document.createElement("div");
  const newText = document.createTextNode("Nuevo párrafo dinámico agregado al contenedor.");
  newDiv.appendChild(newText);
  newDiv.style.marginTop = "8px";
  newDiv.style.color = "#0284c7";
  document.getElementById("sec-6").querySelector(".playground").appendChild(newDiv);
}

// ---------- element ----------
function modifyInnerHTML() {
  const box = document.getElementById("element-demo-box");
  box.innerHTML = "<strong>Texto en negrita</strong> e HTML insertado mediante <em>innerHTML</em>";
}

function modifyTextContent() {
  const box = document.getElementById("element-demo-box");
  box.textContent = "Texto plano seguro insertado mediante textContent (elimina etiquetas HTML)";
}

function navigateTree() {
  const box = document.getElementById("element-demo-box");
  const parentTag = box.parentNode.tagName;
  const childCount = box.children.length;
  alert(`Elemento Padre: ${parentTag} | Cantidad de Elementos Hijos: ${childCount}`);
}

// ---------- collections ----------
function demoHTMLCollection() {
  const collection = document.getElementsByClassName("item-list");
  let info = `HTMLCollection - Longitud: ${collection.length}\n` +
             `Elemento en índice 0 (item(0)): ${collection.item(0).textContent}`;
  const out = document.getElementById("out-collections");
  out.style.whiteSpace = "pre-wrap";
  out.textContent = info;
}

function demoNodeList() {
  const nodeList = document.querySelectorAll(".item-list");
  let itemsText = [];
  nodeList.forEach((node, index) => {
    itemsText.push(`[${index}]: ${node.textContent}`);
  });
  const out = document.getElementById("out-collections");
  out.style.whiteSpace = "pre-wrap";
  out.textContent = "NodeList iterada con forEach:\n" + itemsText.join("\n");
}

// ---------- atributos ----------
function demoAttributes() {
  const el = document.getElementById("attr-target-box");
  const attrMap = el.attributes;
  let list = [];
  for (let i = 0; i < attrMap.length; i++) {
    let attrObj = attrMap.item(i);
    list.push(`${attrObj.name} = "${attrObj.value}"`);
  }
  alert("NamedNodeMap (Attributes):\n" + list.join("\n"));
}

function demoSetAttribute() {
  const el = document.getElementById("attr-target-box");
  el.setAttribute("data-estado", "activo");
  alert("Atributo asignado: data-estado=" + el.getAttribute("data-estado"));
}

function demoClassList() {
  const el = document.getElementById("attr-target-box");
  el.classList.toggle("resaltado");
  if (el.classList.contains("resaltado")) {
    el.style.border = "2px solid #ef4444";
    el.style.backgroundColor = "#fef2f2";
  } else {
    el.style.border = "none";
    el.style.backgroundColor = "#e2e8f0";
  }
}

// ---------- estilos ----------
function changeDirectStyle() {
  const box = document.getElementById("style-target-box");
  box.style.backgroundColor = "#38bdf8";
  box.style.color = "#0f172a";
  box.style.fontWeight = "bold";
}

function demoSetProperty() {
  const box = document.getElementById("style-target-box");
  box.style.setProperty("border", "3px dashed #0284c7");
  box.style.setProperty("padding", "20px");
}

function demoGetComputed() {
  const box = document.getElementById("style-target-box");
  const computed = window.getComputedStyle(box);
  alert(`Color final computado: ${computed.getPropertyValue("background-color")}\nAncho: ${computed.getPropertyValue("width")}`);
}

// ---------- INICIALIZACIÓN DE EVENTOS ----------
// Todo se ejecuta cuando el DOM ya está listo
document.addEventListener("DOMContentLoaded", function () {

  // --- Sidebar: navegación por clic en el menú ---
  document.querySelectorAll("#sidebar .menu-item").forEach(function (item) {
    item.addEventListener("click", function () {
      const idx = parseInt(this.dataset.section, 10);
      if (!isNaN(idx)) goToSection(idx);
    });
  });

  // --- Botones "Atrás" y "Siguiente" de todas las tarjetas ---
  document.querySelectorAll("[data-prev]").forEach(function (btn) {
    btn.addEventListener("click", prevSection);
  });
  document.querySelectorAll("[data-next]").forEach(function (btn) {
    btn.addEventListener("click", nextSection);
  });

  // --- Botón "Iniciar Demostración" del plan de clase ---
  const startBtn = document.getElementById("start-demo-btn");
  if (startBtn) startBtn.addEventListener("click", function () { goToSection(1); });

  // --- Vista 1: Window ---
  document.getElementById("btn-alert").addEventListener("click", runAlert);
  document.getElementById("btn-confirm").addEventListener("click", runConfirm);
  document.getElementById("btn-prompt").addEventListener("click", runPrompt);
  document.getElementById("btn-timer").addEventListener("click", runTimer);
  document.getElementById("btn-dimensions").addEventListener("click", getDimensions);

  // --- Vista 2: Location ---
  document.getElementById("btn-inspect-location").addEventListener("click", inspectLocation);
  document.getElementById("btn-reload").addEventListener("click", reloadPage);

  // --- Vista 3: History ---
  document.getElementById("btn-history-len").addEventListener("click", getHistoryLength);
  document.getElementById("btn-history-back").addEventListener("click", historyBack);

  // --- Vista 4: Navigator ---
  document.getElementById("btn-navigator").addEventListener("click", inspectNavigator);

  // --- Vista 5: Screen ---
  document.getElementById("btn-screen").addEventListener("click", inspectScreen);

  // --- Vista 6: Document ---
  document.getElementById("btn-selectors").addEventListener("click", demoSelectors);
  document.getElementById("btn-create").addEventListener("click", demoCreate);

  // --- Vista 7: Element ---
  document.getElementById("btn-innerhtml").addEventListener("click", modifyInnerHTML);
  document.getElementById("btn-textcontent").addEventListener("click", modifyTextContent);
  document.getElementById("btn-tree").addEventListener("click", navigateTree);

  // --- Vista 8: Collections ---
  document.getElementById("btn-htmlcollection").addEventListener("click", demoHTMLCollection);
  document.getElementById("btn-nodelist").addEventListener("click", demoNodeList);

  // --- Vista 9: Attributes ---
  document.getElementById("btn-attributes").addEventListener("click", demoAttributes);
  document.getElementById("btn-setattr").addEventListener("click", demoSetAttribute);
  document.getElementById("btn-classlist").addEventListener("click", demoClassList);

  // --- Vista 10: Styles ---
  document.getElementById("btn-directstyle").addEventListener("click", changeDirectStyle);
  document.getElementById("btn-setproperty").addEventListener("click", demoSetProperty);
  document.getElementById("btn-computed").addEventListener("click", demoGetComputed);

  // --- Vista 11: Event Object ---
  const eventBtn = document.getElementById("event-demo-btn");
  const linkDemo = document.getElementById("link-demo");
  const outEvent = document.getElementById("out-event");

  if (eventBtn) {
    eventBtn.addEventListener("click", function (event) {
      let details = `Tipo de Evento (type): ${event.type}\n` +
                    `Elemento Emisor (target): ${event.target.tagName}\n` +
                    `Coordenadas del Clic (clientX, clientY): ${event.clientX}px, ${event.clientY}px`;
      outEvent.style.whiteSpace = "pre-wrap";
      outEvent.textContent = details;
    });
  }

  if (linkDemo) {
    linkDemo.addEventListener("click", function (event) {
      event.preventDefault();
      alert("¡evento.preventDefault() ejecutado! Se bloqueó la navegación predeterminada del enlace.");
    });
  }
});