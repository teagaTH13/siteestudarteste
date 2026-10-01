const paginas = document.querySelectorAll(".page");
const linksPagina = document.querySelectorAll("[data-page]");

function mostrarPagina(nome) {
    paginas.forEach(pagina => {
        pagina.classList.toggle("active", pagina.id === nome);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

linksPagina.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        mostrarPagina(link.dataset.page);
    });
});

document.querySelectorAll("[data-scroll]").forEach(botao => {
    botao.addEventListener("click", () => {
        document.getElementById(botao.dataset.scroll).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Abrir matéria
const detalhes = document.getElementById("materiaDetalhes");
const detalheNome = document.getElementById("detalheNome");
const detalheIcone = document.getElementById("detalheIcone");

document.querySelectorAll(".subject-card").forEach(card => {
    card.addEventListener("click", () => {
        detalheNome.textContent = card.dataset.subject;

        const icone = card.querySelector(".subject-icon");
        detalheIcone.textContent = icone.textContent;
        detalheIcone.className = icone.className;

        detalhes.classList.remove("hidden");
        detalhes.scrollIntoView({ behavior: "smooth" });
    });
});

document.getElementById("fecharMateria").addEventListener("click", () => {
    detalhes.classList.add("hidden");
});

// Modal de missão
const modal = document.getElementById("modalMissao");

document.getElementById("abrirMissao").addEventListener("click", () => {
    modal.classList.remove("hidden");
});

document.getElementById("fecharModal").addEventListener("click", () => {
    modal.classList.add("hidden");
});

modal.addEventListener("click", event => {
    if (event.target === modal) {
        modal.classList.add("hidden");
    }
});

document.getElementById("publicarMissao").addEventListener("click", () => {
    const titulo = document.getElementById("tituloMissao").value.trim();
    const texto = document.getElementById("textoMissao").value.trim();

    if (!titulo || !texto) {
        alert("Preencha o título e explique sua dúvida.");
        return;
    }

    alert("Missão publicada! Nesta primeira versão ela é apenas uma simulação local.");
    document.getElementById("tituloMissao").value = "";
    document.getElementById("textoMissao").value = "";
    modal.classList.add("hidden");
});

// Botões de comentário/curtida — protótipo
document.querySelectorAll(".post-actions button").forEach(botao => {
    botao.addEventListener("click", () => {
        if (botao.textContent.includes("Curtir")) {
            botao.textContent = "♥ Curtido";
        } else {
            alert("A área de comentários será adicionada na próxima etapa.");
        }
    });
});

// Criar matéria — protótipo
document.getElementById("novaMateria").addEventListener("click", () => {
    const nome = prompt("Qual será o nome da nova matéria?");

    if (nome && nome.trim()) {
        alert(`A matéria "${nome.trim()}" foi simulada. Na próxima etapa vamos fazer ela aparecer de verdade.`);
    }
});
