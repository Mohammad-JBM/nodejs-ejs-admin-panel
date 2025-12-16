document.addEventListener("DOMContentLoaded", () => {

    /* ================= Add Course Modal ================= */
    const addModalElem = document.querySelector("#add-new-course-modal");
    const showAddModalBtn = document.querySelector(".courses-btn-add-new-course");

    const showAddModal = () => addModalElem.classList.add("visible");
    const hideAddModal = () => addModalElem.classList.remove("visible");

    showAddModalBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        showAddModal();
    });


    /* ================= Edit Course Modal ================= */
    const editModal = document.querySelector("#edit-modal");
    const editBtns = document.querySelectorAll(".courses-btn-edit");

    const editForm = document.querySelector("#edit-course-form");
    const titleInput = document.querySelector("#edit-course-title");

    const showEditModal = () => editModal.classList.add("visible");
    const hideEditModal = () => editModal.classList.remove("visible");

    editBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();

            const courseId = btn.dataset.id;
            const courseTitle = btn.dataset.title;

            if (!courseId) return;

            // set dynamic action
            editForm.action = `/courses/edit/${courseId}`;

            // set current title
            titleInput.value = courseTitle || "";

            showEditModal();
        });
    });


    /* ================= Global Close (ESC) ================= */
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            hideAddModal();
            hideEditModal();
        }
    });

});