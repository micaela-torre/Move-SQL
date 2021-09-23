const moveControllers = {
    inicio: (req, res) => {
        res.render("index", {
            title: "Inicio"
        })
    },
    clases: (req, res) => {
        res.render("clases", {
            title: "Clases"
        })
    },
    galeria: (req, res) => {
        res.render("galeria", {
            title: "Galería"
        })
    },
    panel: (req, res) => {
        res.render("admin", {
            title: "Admin"
        })
    },
    panelAdmin:(req, res) => {
        res.render("admin", {
            title: "Admin"
        })
    },
    profesores:(req, res) => {
        res.render("admin", {
            title: "Profesores"
        })
    },
    alumnos:(req, res) => {
        res.render("admin", {
            title: "Alumnos"
        })
    },
}

module.exports = moveControllers