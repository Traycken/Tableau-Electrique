// Default configuration data
let appState = {
    pageFormat: 'A4-landscape',
    printFormat: 'match',
    customWidth: 29.7,
    customHeight: 21.0,
    projectTitle: 'Tableau de Distribution Principal',
    projectAddress: 'Maison Individuelle - Rez-de-chaussée',
    projectInstaller: 'Électricien Référent',
    projectDate: new Date().toISOString().split('T')[0],
    rowCapacity: 13,
    showTestGrid: true,
    testGridRows: 8,
    colorLegends: {
        none: "",
        blue: "",
        green: "",
        yellow: "",
        red: "",
        purple: "",
        orange: "",
        custom: ""
    },
    rows: [
        {
            id: 1,
            breakers: [
                { id: 101, category: 'differentiel', rating: '40A', type: 'AC', ratingMa: '30mA', description: '', on: true, color: 'none', customHue: 120, customIconType: 'none', customIconValue: '', connected: false, connectedType: 'wifi', connectedIp: '' },
                { id: 102, category: 'disjoncteur', rating: '10A', type: 'lighting', description: '', on: true, color: 'none', customHue: 200, customIconType: 'none', customIconValue: '', connected: false, connectedType: 'wifi', connectedIp: '' },
                { id: 103, category: 'disjoncteur', rating: '10A', type: 'lighting', description: '', on: true, color: 'none', customHue: 200, customIconType: 'none', customIconValue: '', connected: true, connectedType: 'wifi', connectedIp: '192.168.1.50' },
                { id: 104, category: 'differentiel', rating: '40A', type: 'A', ratingMa: '30mA', description: '', on: true, color: 'none', customHue: 120, customIconType: 'none', customIconValue: '', connected: false, connectedType: 'wifi', connectedIp: '' },
                { id: 105, category: 'telerupteur', rating: '16A', type: 'lighting', description: '', on: false, color: 'none', customHue: 200, customIconType: 'none', customIconValue: '', connected: true, connectedType: 'radio', connectedIp: '' },
                { id: 106, category: 'wattmetre', rating: '32A', type: 'other', description: '', on: true, color: 'none', customHue: 200, customIconType: 'none', customIconValue: '', connected: false, connectedType: 'wifi', connectedIp: '', wattValue: '2150 W' },
                { id: 107, category: 'contacteur', rating: '20A', type: 'other', description: '', on: true, color: 'none', customHue: 200, customIconType: 'none', customIconValue: '', connected: false, connectedType: 'wifi', connectedIp: '', contactorState: 'auto' },
                { id: 108, category: 'prise_modulaire', rating: '16A', type: 'socket', description: '', on: true, color: 'none', customHue: 200, customIconType: 'none', customIconValue: '', connected: false, connectedType: 'wifi', connectedIp: '' }
            ]
        }
    ]
};

// SVG icons dictionary
const icons = {
    lighting: `<svg viewBox="0 0 24 24"><path d="M12 2A7 7 0 0 0 5 9c0 2.2 1 4.2 2.6 5.6L9 20h6l1.4-5.4C18 13.2 19 11.2 19 9a7 7 0 0 0-7-7m-3 19h6v1H9v-1z"/></svg>`,
    socket: `<svg viewBox="0 0 24 24"><path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2M9 11a2 2 0 1 1 2-2a2 2 0 0 1-2 2m6 0a2 2 0 1 1 2-2a2 2 0 0 1-2 2m-3 6a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3z"/></svg>`,
    oven: `<svg viewBox="0 0 24 24"><path d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M5 6h14v3H5V6m0 5h14v7H5v-7m2 2h2v3H7v-3m8 0h2v1h-2v-1z"/></svg>`,
    wash_machine: `<svg viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M8 6c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m3 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m1 11a5 5 0 1 1 5-5a5 5 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3 3 0 0 0-3-3z"/></svg>`,
    dry_machine: `<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 16a6 6 0 1 1 6-6a6 6 0 0 1-6 6m2-8.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z"/></svg>`,
    heater: `<svg viewBox="0 0 24 24"><path d="M4 3h2v14H4V3m4 0h2v14H8V3m4 0h2v14h-2V3m4 0h2v14h-2V3M2 19h20v2H2v-2z"/></svg>`,
    cooktop: `<svg viewBox="0 0 24 24"><path d="M4 2h16c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2m4 6a3 3 0 1 0 0-6a3 3 0 0 0 0 6m8 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8m8-1a3 3 0 1 0 0-6a3 3 0 0 0 0 6z"/></svg>`,
    fridge: `<svg viewBox="0 0 24 24"><path d="M9 2h6c1.1 0 2 .9 2 2v6H7V4c0-1.1.9-2 2-2m-2 9h10v9c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-9m2 2v4h1v-4H9zm0-7v3h1V6H9z"/></svg>`,
    roller_shutter: `<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 4H7V5h10v2M7 9h10v2H7V9m0 4h10v2H7v-2m0 4h10v1H7v-1z"/></svg>`,
    vmc: `<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 16a6 6 0 1 1 6-6a6 6 0 0 1-6 6m0-10a4 4 0 1 0 4 4a4 4 0 0 0-4-4z"/></svg>`,
    other: `<svg viewBox="0 0 24 24"><path d="M11 15H6l7-14v8h5l-7 14v-8z"/></svg>`
};

// SVG icons for connection status
const connectedIcons = {
    wifi: `<svg viewBox="0 0 24 24"><path d="M12 3C7.79 3 3.97 4.7 1.14 7.46l1.42 1.42C5.07 6.6 8.35 5 12 5s6.93 1.6 9.44 3.88l1.42-1.42C20.03 4.7 16.21 3 12 3m0 4c-3.11 0-5.9 1.25-7.94 3.27l1.42 1.42C7.14 10.4 9.47 9.5 12 9.5s4.86.9 6.52 2.19l1.42-1.42C17.9 8.25 15.11 7 12 7m0 4c-1.99 0-3.79.8-5.1 2.1l1.42 1.42c.94-.92 2.24-1.52 3.68-1.52s2.74.6 3.68 1.52l1.42-1.42C15.79 11.8 13.99 11 12 11m0 4c-.9 0-1.7.4-2.2 1l2.2 2.2l2.2-2.2c-.5-.6-1.3-1-2.2-1z"/></svg>`,
    radio: `<svg viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.17 6.13l1.42-1.42A7.91 7.91 0 0 1 4 12a8 8 0 0 1 8-8a8 8 0 0 1 8 8a7.91 7.91 0 0 1-1.59 4.84l1.42 1.42A9.89 9.89 0 0 0 22 12A10 10 0 0 0 12 2m0 4a6 6 0 0 0-6 6a5.91 5.91 0 0 0 1.13 3.52l1.42-1.42A3.91 3.91 0 0 1 8 12a4 4 0 0 1 4-4a4 4 0 0 1 4 4a3.91 3.91 0 0 1-.55 2.1l1.42 1.42A5.91 5.91 0 0 0 18 12a6 6 0 0 0-6-6m0 4a2 2 0 0 0-2 2a1.9 1.9 0 0 0 .5 1.3l1.5-1.5V12z"/></svg>`,
    ir: `<svg viewBox="0 0 24 24"><path d="M7 11h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM12 2a10 10 0 0 0-10 10v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7a10 10 0 0 0-10-10m0 16H4v-6c0-4.41 3.59-8 8-8s8 3.59 8 8v6h-8z"/></svg>`
};

// Drag and drop tracking variables
let draggedRowId = null;
let draggedBreakerId = null;

// Sidebar Drag and drop tracking variables
let sidebarDraggedRowId = null;
let sidebarDraggedBreakerId = null;

// Initial setup on load
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('project-date').value = appState.projectDate;
    
    const formatSelect = document.getElementById('page-format');
    formatSelect.addEventListener('change', (e) => {
        appState.pageFormat = e.target.value;
        const customRow = document.getElementById('custom-dimensions-row');
        if (appState.pageFormat === 'custom') {
            customRow.style.display = 'grid';
        } else {
            customRow.style.display = 'none';
        }
        window.saveState();
        updateDimensions();
    });

    const printFormatSelect = document.getElementById('print-format');
    if (printFormatSelect) {
        printFormatSelect.addEventListener('change', (e) => {
            appState.printFormat = e.target.value;
            window.saveState();
            updateDimensions();
        });
    }

    document.getElementById('custom-width').addEventListener('input', (e) => {
        appState.customWidth = parseFloat(e.target.value) || 29.7;
        window.saveState();
        updateDimensions();
    });

    document.getElementById('custom-height').addEventListener('input', (e) => {
        appState.customHeight = parseFloat(e.target.value) || 21.0;
        window.saveState();
        updateDimensions();
    });

    // Metadata changes
    ['project-title', 'project-address', 'project-installer', 'project-date', 'project-general-comment'].forEach(id => {
        const input = document.getElementById(id);
        input.addEventListener('input', (e) => {
            if (id === 'project-title') appState.projectTitle = e.target.value;
            if (id === 'project-address') appState.projectAddress = e.target.value;
            if (id === 'project-installer') appState.projectInstaller = e.target.value;
            if (id === 'project-date') appState.projectDate = e.target.value;
            if (id === 'project-general-comment') {
                appState.generalComment = e.target.value;
                renderCommentsPreview();
            }

            const cartText = document.getElementById(id.replace('project-', 'cartouche-'));
            if (cartText) {
                if (id === 'project-date') {
                    const d = new Date(e.target.value);
                    cartText.innerText = isNaN(d.getTime()) ? e.target.value : d.toLocaleDateString('fr-FR');
                } else {
                    cartText.innerText = e.target.value;
                }
            }
        });
    });

    // Monthly Test Grid Controls
    const testGridCheckbox = document.getElementById('show-test-grid-checkbox');
    testGridCheckbox.addEventListener('change', (e) => {
        appState.showTestGrid = e.target.checked;
        const yearsBlock = document.getElementById('test-grid-years-block');
        yearsBlock.style.display = appState.showTestGrid ? 'block' : 'none';
        renderAll();
    });

    const testGridRowsSelect = document.getElementById('test-grid-rows-select');
    testGridRowsSelect.addEventListener('change', (e) => {
        appState.testGridRows = parseInt(e.target.value);
        renderAll();
    });

    document.getElementById('row-modules-capacity').addEventListener('change', (e) => {
        appState.rowCapacity = parseInt(e.target.value);
        renderAll();
    });

    document.getElementById('add-row-btn').addEventListener('click', () => {
        const newId = appState.rows.length > 0 ? Math.max(...appState.rows.map(r => r.id)) + 1 : 1;
        appState.rows.push({
            id: newId,
            breakers: []
        });
        renderAll();
    });

    document.getElementById('new-board-btn').addEventListener('click', () => {
        if (confirm('Créer un nouveau tableau vide ? Toutes vos modifications actuelles seront perdues.')) {
            appState = {
                pageFormat: 'A4-landscape',
                printFormat: 'match',
                customWidth: 29.7,
                customHeight: 21.0,
                projectTitle: '',
                projectAddress: '',
                projectInstaller: '',
                projectDate: new Date().toISOString().split('T')[0],
                rowCapacity: 13,
                showTestGrid: true,
                testGridRows: 8,
                colorLegends: { none: "", blue: "", green: "", yellow: "", red: "", purple: "", orange: "", custom: "" },
                rows: [
                    { id: 1, breakers: [] }
                ]
            };
            
            // Clear inputs
            document.getElementById('project-title').value = '';
            document.getElementById('project-address').value = '';
            document.getElementById('project-installer').value = '';
            document.getElementById('project-date').value = appState.projectDate;
            document.getElementById('project-general-comment').value = '';
            document.getElementById('page-format').value = 'A4-landscape';
            document.getElementById('custom-dimensions-row').style.display = 'none';
            document.getElementById('row-modules-capacity').value = 13;
            
            // Reset color legend inputs
            ['blue', 'green', 'yellow', 'red', 'purple', 'orange'].forEach(color => {
                const input = document.getElementById(`legend-${color}`);
                if (input) input.value = '';
            });

            // Clear selection
            window.selectedBreakers = [];
            window.selectedBreakerId = null;
            window.selectedRowId = null;

            window.saveState();
            updateDimensions();
            renderAll();
        }
    });

    document.getElementById('reset-spaces-btn').addEventListener('click', () => {
        appState.rows.forEach(row => {
            row.breakers = row.breakers.filter(b => !(b.isSpace || b.category === 'vide'));
        });
        window.saveState();
        renderAll();
    });

    document.getElementById('reset-btn').addEventListener('click', () => {
        if(confirm('Réinitialiser le tableau entier ?')) {
            location.reload();
        }
    });

    const tipsBtn = document.getElementById('print-tips-btn');
    const tipsModal = document.getElementById('print-tips-modal');
    const tipsCloseBtn = document.getElementById('print-tips-close-btn');

    if (tipsBtn && tipsModal) {
        tipsBtn.addEventListener('click', () => {
            tipsModal.style.display = 'flex';
        });
    }

    if (tipsCloseBtn && tipsModal) {
        tipsCloseBtn.addEventListener('click', () => {
            tipsModal.style.display = 'none';
        });
    }

    // Close tips modal when clicking outside content box
    if (tipsModal) {
        tipsModal.addEventListener('click', (e) => {
            if (e.target === tipsModal) {
                tipsModal.style.display = 'none';
            }
        });
    }

    // Undo/Redo/Clipboard global state
    window.selectedBreakerId = null;
    window.selectedRowId = null;
    window.clipboard = null;
    window.undoStack = [];
    window.redoStack = [];

    // Save state to undo history
    window.saveState = function() {
        const stateCopy = JSON.stringify(appState);
        if (undoStack.length === 0 || undoStack[undoStack.length - 1] !== stateCopy) {
            undoStack.push(stateCopy);
            redoStack = []; // Clear redo stack on new action
            updateUndoRedoButtons();
        }
        localStorage.setItem('current_electrical_panel', stateCopy);
    };

    function updateUndoRedoButtons() {
        document.getElementById('undo-btn').disabled = undoStack.length <= 1;
        document.getElementById('redo-btn').disabled = redoStack.length === 0;
    }

    window.undo = function() {
        if (undoStack.length > 1) {
            const current = undoStack.pop();
            redoStack.push(current);
            appState = JSON.parse(undoStack[undoStack.length - 1]);
            updateUndoRedoButtons();
            localStorage.setItem('current_electrical_panel', JSON.stringify(appState));
            renderAll();
        }
    };

    window.redo = function() {
        if (redoStack.length > 0) {
            const next = redoStack.pop();
            undoStack.push(next);
            appState = JSON.parse(next);
            updateUndoRedoButtons();
            localStorage.setItem('current_electrical_panel', JSON.stringify(appState));
            renderAll();
        }
    };

    // Selection tracking helpers
    window.selectedBreakers = []; // Array of { rowId, breakerId }

    window.selectBreaker = function(rowId, breakerId, event) {
        const isMulti = event && (event.ctrlKey || event.metaKey);
        
        if (isMulti) {
            const idx = window.selectedBreakers.findIndex(sel => sel.breakerId === breakerId);
            if (idx !== -1) {
                window.selectedBreakers.splice(idx, 1);
            } else {
                window.selectedBreakers.push({ rowId, breakerId });
            }
        } else {
            window.selectedBreakers = [{ rowId, breakerId }];
        }

        // Maintain primary selection properties for backward compatibility
        if (window.selectedBreakers.length > 0) {
            const primary = window.selectedBreakers[window.selectedBreakers.length - 1];
            window.selectedRowId = primary.rowId;
            window.selectedBreakerId = primary.breakerId;
        } else {
            window.selectedRowId = null;
            window.selectedBreakerId = null;
        }
        
        // Highlight in preview and sidebar outline
        document.querySelectorAll('.module-device, .module-outline-item').forEach(el => {
            const bId = parseInt(el.dataset.breakerId);
            const isSel = window.selectedBreakers.some(sel => sel.breakerId === bId);
            if (isSel) {
                el.classList.add('selected');
            } else {
                el.classList.remove('selected');
            }
        });
        window.renderInspector();
    };

    window.deselectBreaker = function() {
        window.selectedRowId = null;
        window.selectedBreakerId = null;
        window.selectedBreakers = [];
        document.querySelectorAll('.module-device, .module-outline-item').forEach(el => {
            el.classList.remove('selected');
        });
        window.renderInspector();
    };

    // Deselect breaker when clicking in the empty space of the sheet or preview container
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('preview-container') || 
            e.target.classList.contains('printable-board-container') || 
            e.target.id === 'printable-board' ||
            e.target.classList.contains('panel-board') || 
            e.target.id === 'panel-board-preview' ||
            e.target.classList.contains('din-rail-row') ||
            e.target.classList.contains('rail-filler')) {
            window.deselectBreaker();
        }
    });

    // Clipboard actions
    window.copyBreaker = function() {
        if (window.selectedBreakers.length === 0) return;
        const copied = [];
        window.selectedBreakers.forEach(sel => {
            const row = appState.rows.find(r => r.id === sel.rowId);
            if (row) {
                const b = row.breakers.find(item => item.id === sel.breakerId);
                if (b) copied.push(JSON.parse(JSON.stringify(b)));
            }
        });
        window.clipboard = copied;
    };

    window.duplicateBreaker = function() {
        if (window.selectedBreakers.length === 0) return;
        let targetRowId = window.selectedRowId;
        let targetBreakerId = window.selectedBreakerId;
        
        if (!targetRowId) return;
        const row = appState.rows.find(r => r.id === targetRowId);
        if (!row) return;

        const newBreakers = [];
        window.selectedBreakers.forEach(sel => {
            const rowOfSel = appState.rows.find(r => r.id === sel.rowId);
            if (rowOfSel) {
                const originalBreaker = rowOfSel.breakers.find(item => item.id === sel.breakerId);
                if (originalBreaker && originalBreaker.category !== 'vide') {
                    const clone = JSON.parse(JSON.stringify(originalBreaker));
                    clone.id = Date.now() + Math.floor(Math.random() * 100000);
                    
                    const idx = rowOfSel.breakers.findIndex(b => b.id === originalBreaker.id);
                    if (idx !== -1) {
                        rowOfSel.breakers.splice(idx + 1, 0, clone);
                        newBreakers.push({ rowId: sel.rowId, breakerId: clone.id });
                    }
                }
            }
        });

        if (newBreakers.length > 0) {
            window.saveState();
            renderAll();
            window.selectedBreakers = newBreakers;
            const primary = newBreakers[newBreakers.length - 1];
            window.selectedRowId = primary.rowId;
            window.selectedBreakerId = primary.breakerId;
            window.renderInspector();
        }
    };

    window.cutBreaker = function() {
        if (window.selectedBreakers.length === 0) return;
        window.copyBreaker();
        window.selectedBreakers.forEach(sel => {
            const row = appState.rows.find(r => r.id === sel.rowId);
            if (row) {
                row.breakers = row.breakers.filter(b => b.id !== sel.breakerId);
            }
        });
        window.deselectBreaker();
        window.saveState();
        renderAll();
    };

    window.pasteBreaker = function() {
        if (!window.clipboard || window.clipboard.length === 0) return;
        
        let targetRowId = window.selectedRowId;
        let targetBreakerId = window.selectedBreakerId;
        
        if (!targetRowId) {
            if (appState.rows.length === 0) {
                appState.rows.push({ id: 1, breakers: [] });
            }
            targetRowId = appState.rows[0].id;
        }

        const row = appState.rows.find(r => r.id === targetRowId);
        if (!row) return;

        let insertIdx = row.breakers.length;
        if (targetBreakerId) {
            const idx = row.breakers.findIndex(b => b.id === targetBreakerId);
            if (idx !== -1) insertIdx = idx + 1;
        }

        const newBreakers = [];
        const toPaste = Array.isArray(window.clipboard) ? window.clipboard : [window.clipboard];
        
        toPaste.forEach(b => {
            const newB = JSON.parse(JSON.stringify(b));
            newB.id = Date.now() + Math.floor(Math.random() * 100000);
            row.breakers.splice(insertIdx, 0, newB);
            newBreakers.push({ rowId: targetRowId, breakerId: newB.id });
            insertIdx++;
        });

        window.saveState();
        renderAll();
        
        window.selectedBreakers = newBreakers;
        if (newBreakers.length > 0) {
            const primary = newBreakers[newBreakers.length - 1];
            window.selectedRowId = primary.rowId;
            window.selectedBreakerId = primary.breakerId;
        }
        
        document.querySelectorAll('.module-device, .module-outline-item').forEach(el => {
            const bId = parseInt(el.dataset.breakerId);
            const isSel = window.selectedBreakers.some(sel => sel.breakerId === bId);
            if (isSel) {
                el.classList.add('selected');
            } else {
                el.classList.remove('selected');
            }
        });
        window.renderInspector();
    };

    // File .te export/import
    document.getElementById('export-btn').addEventListener('click', () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", (appState.projectTitle || "tableau").replace(/[^a-z0-9]/gi, '_').toLowerCase() + ".te");
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    });

    document.getElementById('import-btn-trigger').addEventListener('click', () => {
        document.getElementById('import-file-input').click();
    });

    document.getElementById('import-file-input').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(evt) {
            try {
                const parsed = JSON.parse(evt.target.result);
                if (parsed && Array.isArray(parsed.rows)) {
                    appState = parsed;
                    if (!appState.projectTitle) appState.projectTitle = "Tableau Importé";
                    restoreStateToUI();
                    window.saveState();
                    updateDimensions();
                    renderAll();
                } else {
                    alert("Fichier .te invalide");
                }
            } catch(err) {
                alert("Erreur lors de la lecture du fichier : " + err.message);
            }
        };
        reader.readAsText(file);
    });

    // File & Templates Modal Manager Controls
    const templatesModal = document.getElementById('local-templates-modal');
    const modalTemplatesList = document.getElementById('modal-templates-list');
    const newTemplateNameInput = document.getElementById('new-template-name');
    const modalTitle = templatesModal.querySelector('.modal-header h2');
    let modalMode = 'load'; // 'load' or 'save'

    window.openTemplatesModal = function(mode) {
        modalMode = mode || 'load';
        modalTitle.innerText = modalMode === 'save' ? 'Sauvegarder le Tableau' : 'Charger un Tableau';
        newTemplateNameInput.value = appState.projectTitle || "Modèle";
        renderModalTemplatesList();
        templatesModal.style.display = 'flex';
    };

    window.closeTemplatesModal = function() {
        templatesModal.style.display = 'none';
    };

    function renderModalTemplatesList() {
        modalTemplatesList.innerHTML = '';
        const templates = JSON.parse(localStorage.getItem('electrical_templates') || '{}');
        Object.keys(templates).forEach(name => {
            const li = document.createElement('li');
            const actionText = modalMode === 'save' ? 'Écraser' : 'Charger';
            const actionBtnClass = modalMode === 'save' ? 'btn-secondary' : 'btn-primary';
            
            li.innerHTML = `
                <span class="template-name">${name}</span>
                <div class="template-actions">
                    <button class="${actionBtnClass} action-tpl-btn">${actionText}</button>
                    <button class="btn-danger delete-tpl-btn">Suppr</button>
                </div>
            `;

            li.querySelector('.action-tpl-btn').addEventListener('click', () => {
                if (modalMode === 'save') {
                    if (confirm(`Écraser la sauvegarde "${name}" avec le tableau actuel ?`)) {
                        templates[name] = appState;
                        localStorage.setItem('electrical_templates', JSON.stringify(templates));
                        renderModalTemplatesList();
                        alert("Sauvegarde mise à jour !");
                    }
                } else {
                    appState = templates[name];
                    restoreStateToUI();
                    window.saveState();
                    updateDimensions();
                    renderAll();
                    window.closeTemplatesModal();
                }
            });

            li.querySelector('.delete-tpl-btn').addEventListener('click', () => {
                if (confirm(`Supprimer le modèle "${name}" ?`)) {
                    delete templates[name];
                    localStorage.setItem('electrical_templates', JSON.stringify(templates));
                    renderModalTemplatesList();
                }
            });

            modalTemplatesList.appendChild(li);
        });
    }

    document.getElementById('modal-close-btn').addEventListener('click', window.closeTemplatesModal);
    
    // Close modal on overlay click
    templatesModal.addEventListener('click', (e) => {
        if (e.target === templatesModal) {
            window.closeTemplatesModal();
        }
    });

    document.getElementById('modal-save-btn').addEventListener('click', () => {
        const name = newTemplateNameInput.value.trim();
        if (name) {
            const templates = JSON.parse(localStorage.getItem('electrical_templates') || '{}');
            templates[name] = appState;
            localStorage.setItem('electrical_templates', JSON.stringify(templates));
            renderModalTemplatesList();
            alert("Modèle enregistré !");
        } else {
            alert("Veuillez saisir un nom de modèle.");
        }
    });

    // Re-route legacy local buttons to show the new modal with appropriate mode
    document.getElementById('save-local-btn').addEventListener('click', () => window.openTemplatesModal('save'));
    document.getElementById('load-local-btn').addEventListener('click', () => window.openTemplatesModal('load'));

    // Buttons bindings
    document.getElementById('undo-btn').addEventListener('click', window.undo);
    document.getElementById('redo-btn').addEventListener('click', window.redo);
    document.getElementById('copy-btn').addEventListener('click', window.copyBreaker);
    document.getElementById('cut-btn').addEventListener('click', window.cutBreaker);
    document.getElementById('paste-btn').addEventListener('click', window.pasteBreaker);
    document.getElementById('print-btn').addEventListener('click', () => {
        window.print();
    });

    // Custom Context Menu implementation
    const contextMenu = document.getElementById('custom-context-menu');
    let contextRowId = null;
    let contextBreakerId = null;

    window.showContextMenu = function(x, y, rowId, breakerId) {
        contextRowId = rowId;
        contextBreakerId = breakerId;
        contextMenu.style.left = `${x}px`;
        contextMenu.style.top = `${y}px`;
        contextMenu.style.display = 'block';
    };

    window.hideContextMenu = function() {
        contextMenu.style.display = 'none';
    };

    // Close context menu on left click anywhere
    document.addEventListener('click', () => {
        window.hideContextMenu();
    });

    // Close context menu on window resize and recalculate board scale factors
    window.addEventListener('resize', () => {
        window.hideContextMenu();
        updateDimensions();
        setTimeout(adjustDescriptionFontSizes, 100);
    });

    document.getElementById('ctx-copy').addEventListener('click', () => {
        window.copyBreaker();
    });

    document.getElementById('ctx-duplicate').addEventListener('click', () => {
        window.duplicateBreaker();
    });

    document.getElementById('ctx-cut').addEventListener('click', () => {
        window.cutBreaker();
    });

    document.getElementById('ctx-delete').addEventListener('click', () => {
        if (contextRowId && contextBreakerId) {
            const isPart = window.selectedBreakers && window.selectedBreakers.some(sel => sel.breakerId === contextBreakerId);
            if (isPart) {
                window.selectedBreakers.forEach(sel => {
                    window.deleteBreaker(sel.rowId, sel.breakerId);
                });
                window.deselectBreaker();
            } else {
                window.deleteBreaker(contextRowId, contextBreakerId);
            }
        }
    });

    document.getElementById('ctx-toggle-on').addEventListener('click', () => {
        if (contextRowId && contextBreakerId) {
            const isPart = window.selectedBreakers && window.selectedBreakers.some(sel => sel.breakerId === contextBreakerId);
            if (isPart) {
                const clickedRow = appState.rows.find(r => r.id === contextRowId);
                const clickedBreaker = clickedRow ? clickedRow.breakers.find(b => b.id === contextBreakerId) : null;
                if (clickedBreaker) {
                    const targetOn = !clickedBreaker.on;
                    window.selectedBreakers.forEach(sel => {
                        const row = appState.rows.find(r => r.id === sel.rowId);
                        if (row) {
                            const b = row.breakers.find(item => item.id === sel.breakerId);
                            if (b) {
                                b.on = targetOn;
                                b.wired = targetOn;
                            }
                        }
                    });
                }
            } else {
                const row = appState.rows.find(r => r.id === contextRowId);
                if (row) {
                    const breaker = row.breakers.find(b => b.id === contextBreakerId);
                    if (breaker) {
                        breaker.on = !breaker.on;
                        breaker.wired = breaker.on;
                    }
                }
            }
            window.saveState();
            renderAll();
        }
    });

    document.getElementById('ctx-toggle-unused').addEventListener('click', () => {
        if (contextRowId && contextBreakerId) {
            const isPart = window.selectedBreakers && window.selectedBreakers.some(sel => sel.breakerId === contextBreakerId);
            if (isPart) {
                const clickedRow = appState.rows.find(r => r.id === contextRowId);
                const clickedBreaker = clickedRow ? clickedRow.breakers.find(b => b.id === contextBreakerId) : null;
                if (clickedBreaker) {
                    const targetUnused = !clickedBreaker.unused;
                    window.selectedBreakers.forEach(sel => {
                        const row = appState.rows.find(r => r.id === sel.rowId);
                        if (row) {
                            const b = row.breakers.find(item => item.id === sel.breakerId);
                            if (b) {
                                b.unused = targetUnused;
                                if (!targetUnused) {
                                    b.wired = true;
                                    b.on = true;
                                }
                            }
                        }
                    });
                }
            } else {
                const row = appState.rows.find(r => r.id === contextRowId);
                if (row) {
                    const breaker = row.breakers.find(b => b.id === contextBreakerId);
                    if (breaker) {
                        breaker.unused = !breaker.unused;
                        if (!breaker.unused) {
                            breaker.wired = true;
                            breaker.on = true;
                        }
                    }
                }
            }
            window.saveState();
            renderAll();
        }
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
        // Only trigger if not typing in inputs
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        if (e.ctrlKey || e.metaKey) {
            if (e.key === 'z' || e.key === 'Z') {
                e.preventDefault();
                window.undo();
            } else if (e.key === 'y' || e.key === 'Y') {
                e.preventDefault();
                window.redo();
            } else if (e.key === 'c' || e.key === 'C') {
                e.preventDefault();
                window.copyBreaker();
            } else if (e.key === 'x' || e.key === 'X') {
                e.preventDefault();
                window.cutBreaker();
            } else if (e.key === 'v' || e.key === 'V') {
                e.preventDefault();
                window.pasteBreaker();
            }
        } else if (e.key === 'Delete' || e.key === 'Del') {
            if (window.selectedBreakers && window.selectedBreakers.length > 0) {
                e.preventDefault();
                window.selectedBreakers.forEach(sel => {
                    window.deleteBreaker(sel.rowId, sel.breakerId);
                });
                window.deselectBreaker();
            }
        }
    });

    // Initialize Auto-Save state
    let savedState = localStorage.getItem('current_electrical_panel');
    if (!savedState) {
        // Automatically save a new unsaved electrical panel under the name "last" in the local storage templates
        const templates = JSON.parse(localStorage.getItem('electrical_templates') || '{}');
        templates['last'] = appState;
        localStorage.setItem('electrical_templates', JSON.stringify(templates));
    } else {
        try {
            appState = JSON.parse(savedState);
        } catch(e) {}
    }

    restoreStateToUI();

    // Bind Color Legend Inputs
    const colorsList = ['blue', 'green', 'yellow', 'red', 'purple', 'orange'];
    colorsList.forEach(color => {
        const input = document.getElementById(`legend-${color}`);
        if (input) {
            input.addEventListener('input', (e) => {
                appState.colorLegends[color] = e.target.value;
                window.saveState();
                renderAll();
            });
        }
    });
    
    // Add current initial state to undo stack
    undoStack.push(JSON.stringify(appState));
    updateUndoRedoButtons();

    updateDimensions();
    renderAll();
});

function restoreStateToUI() {
    document.getElementById('project-title').value = appState.projectTitle || "";
    document.getElementById('project-address').value = appState.projectAddress || "";
    document.getElementById('project-installer').value = appState.projectInstaller || "";
    document.getElementById('project-date').value = appState.projectDate || new Date().toISOString().split('T')[0];
    document.getElementById('project-general-comment').value = appState.generalComment || "";
    
    // Restore page format & custom dimensions values
    if (appState.pageFormat) {
        document.getElementById('page-format').value = appState.pageFormat;
        const customRow = document.getElementById('custom-dimensions-row');
        if (customRow) {
            if (appState.pageFormat === 'custom') {
                customRow.style.display = 'grid';
            } else {
                customRow.style.display = 'none';
            }
        }
    }
    if (appState.customWidth) {
        document.getElementById('custom-width').value = appState.customWidth;
    }
    if (appState.customHeight) {
        document.getElementById('custom-height').value = appState.customHeight;
    }
    if (appState.printFormat) {
        document.getElementById('print-format').value = appState.printFormat;
    }
    if (appState.rowCapacity) {
        document.getElementById('row-modules-capacity').value = appState.rowCapacity;
    }

    // Restore Color Legends
    const colorsList = ['blue', 'green', 'yellow', 'red', 'purple', 'orange'];
    if (!appState.colorLegends) {
        appState.colorLegends = { none: "", blue: "", green: "", yellow: "", red: "", purple: "", orange: "", custom: "" };
    }
    colorsList.forEach(color => {
        const input = document.getElementById(`legend-${color}`);
        if (input) {
            input.value = appState.colorLegends[color] || "";
        }
    });
}

function updateDimensions() {
    let width = 29.7;
    let height = 21.0;
    let label = 'A4 Paysage';

    if (appState.pageFormat === 'A4-landscape') {
        width = 29.7;
        height = 21.0;
        label = 'A4 Paysage';
    } else if (appState.pageFormat === 'A4-portrait') {
        width = 21.0;
        height = 29.7;
        label = 'A4 Portrait';
    } else {
        width = appState.customWidth;
        height = appState.customHeight;
        label = `Sur mesure (${width} x ${height} cm)`;
    }

    const board = document.getElementById('printable-board');
    board.style.width = `${width}cm`;
    board.style.height = `${height}cm`;
    board.style.setProperty('--row-capacity', appState.rowCapacity || 13);

    document.getElementById('cartouche-format').innerText = label;

    // Define printer/print-out dimensions
    let printWidth = width;
    let printHeight = height;

    const pf = appState.printFormat || 'match';
    if (pf === 'A4-landscape') {
        printWidth = 29.7;
        printHeight = 21.0;
    } else if (pf === 'A4-portrait') {
        printWidth = 21.0;
        printHeight = 29.7;
    } else if (pf === 'A3-landscape') {
        printWidth = 42.0;
        printHeight = 29.7;
    } else if (pf === 'A3-portrait') {
        printWidth = 29.7;
        printHeight = 42.0;
    }

    const styleEl = document.getElementById('dynamic-print-style');

    // Calculate margins if design size is smaller than printer page size
    let paddingLeft = 0;
    let paddingTop = 0;
    if (printWidth > width) {
        paddingLeft = (printWidth - width) / 2;
    }
    if (printHeight > height) {
        paddingTop = (printHeight - height) / 2;
    }

    styleEl.innerHTML = `
        @media print {
            @page {
                size: ${printWidth}cm ${printHeight}cm;
                margin: 0;
            }
            body {
                width: ${printWidth}cm;
                height: ${printHeight}cm;
                margin: 0;
                padding: 0;
                background-color: white !important;
            }
            .preview-container {
                padding: 0 !important;
                margin: 0 !important;
                width: ${printWidth}cm !important;
                height: ${printHeight}cm !important;
                display: block !important;
                background-color: white !important;
                position: relative !important;
            }
            .printable-board-container {
                width: ${width}cm !important;
                height: ${height}cm !important;
                position: absolute !important;
                left: ${paddingLeft}cm !important;
                top: ${paddingTop}cm !important;
                margin: 0 !important;
                border: none !important;
                box-shadow: none !important;
            }
            /* Crop/cut guidelines around printable board container */
            .printable-board-container::after {
                content: '';
                position: absolute;
                top: -1px;
                left: -1px;
                right: -1px;
                bottom: -1px;
                border: 1px dashed #64748b !important;
                pointer-events: none;
                z-index: 9999;
            }
            /* Crop indicators with dimensions and scissors icon */
            .printable-board-container::before {
                content: '✂ Découpe : ${width} x ${height} cm';
                position: absolute;
                top: -18px;
                left: 0;
                font-size: 9px;
                font-family: 'Inter', sans-serif;
                color: #64748b;
                white-space: nowrap;
                font-weight: bold;
                z-index: 9999;
            }
            .printable-board-container {
                transform: none !important;
            }
        }
    `;

    // Dynamic viewport scaling using pure CSS custom properties
    setTimeout(() => {
        const board = document.getElementById('printable-board');
        const container = document.querySelector('.preview-container');
        if (board && container) {
            const containerWidth = container.clientWidth - 80; // 40px padding * 2
            const containerHeight = container.clientHeight - 80;

            const pxPerCm = 37.795;
            const targetWidthPx = width * pxPerCm;
            const targetHeightPx = height * pxPerCm;

            const scaleX = containerWidth / targetWidthPx;
            const scaleY = containerHeight / targetHeightPx;
            const scale = Math.min(scaleX, scaleY, 1.2); // Limit scale

            board.style.setProperty('--board-scale', scale);
        }
    }, 50);
}

function getBreakerWidth(breaker) {
    if (!breaker) return 1;
    if (breaker.width !== undefined && breaker.width !== null) {
        return parseInt(breaker.width) || 1;
    }
    if (breaker.category === 'differentiel' || breaker.category === 'wattmetre' || breaker.category === 'prise_modulaire') {
        return 2;
    }
    return 1;
}

function formatDescriptionHtml(desc) {
    if (!desc) return '&nbsp;';
    return desc.split('\n').map(line => `<div class="description-line">${line || '&nbsp;'}</div>`).join('');
}

function adjustDescriptionFontSizes() {
    const lines = document.querySelectorAll('.device-description .description-line');
    lines.forEach(line => {
        line.style.fontSize = '7px';
        const parent = line.closest('.device-description');
        if (!parent) return;
        const maxW = parent.clientWidth - 2;
        if (maxW <= 0) return;
        let currentSize = 7;
        while (line.scrollWidth > maxW && currentSize > 4) {
            currentSize -= 0.5;
            line.style.fontSize = currentSize + 'px';
        }
    });

    const brands = document.querySelectorAll('.device-brand');
    brands.forEach(brand => {
        brand.style.fontSize = '7px';
        const parent = brand.parentElement;
        if (!parent) return;
        const maxW = parent.clientWidth - 6; // Safety margin for module padding
        if (maxW <= 0) return;
        let currentSize = 7;
        while (brand.scrollWidth > maxW && currentSize > 4) {
            currentSize -= 0.5;
            brand.style.fontSize = currentSize + 'px';
        }
    });
}

function getBreakerColor(breaker) {
    if (!breaker) return '#475569';
    if (breaker.color === 'custom') {
        return `hsl(${breaker.customHue || 120}, 75%, 35%)`;
    }
    const colorMap = {
        blue: '#2563eb',
        green: '#16a34a',
        yellow: '#ca8a04',
        red: '#dc2626',
        purple: '#7c3aed',
        orange: '#ea580c'
    };
    return colorMap[breaker.color] || '#475569';
}

function getElementUID(row, breaker, rowIndex) {
    const rowNum = rowIndex + 1;
    const headerText = breaker.customBrand || getCategoryLabel(breaker.category) || '';
    const firstLetter = headerText.trim().charAt(0).toUpperCase() || 'X';
    
    let matchCount = 0;
    for (const b of row.breakers) {
        const bHeader = b.customBrand || getCategoryLabel(b.category) || '';
        const bLetter = bHeader.trim().charAt(0).toUpperCase() || 'X';
        if (bLetter === firstLetter) {
            matchCount++;
            if (b.id === breaker.id) {
                break;
            }
        }
    }
    return `R${rowNum}-${firstLetter}${matchCount}`;
}

function renderCommentsPreview() {
    const container = document.getElementById('comments-preview-container');
    const list = document.getElementById('comments-preview-list');
    if (!container || !list) return;

    const commentedBreakers = [];
    appState.rows.forEach((row, rowIndex) => {
        row.breakers.forEach(b => {
            if (b.comment && b.comment.trim()) {
                const uid = getElementUID(row, b, rowIndex);
                commentedBreakers.push({
                    uid: uid,
                    comment: b.comment.trim(),
                    breaker: b
                });
            }
        });
    });

    const hasGeneral = appState.generalComment && appState.generalComment.trim();

    if (commentedBreakers.length === 0 && !hasGeneral) {
        container.style.display = 'none';
        list.innerHTML = '';
        return;
    }

    container.style.display = 'block';
    
    let htmlContent = '';
    
    if (hasGeneral) {
        const generalLines = appState.generalComment.trim().split('\n');
        htmlContent += generalLines.map(line => {
            return `
                <div style="display: flex; gap: 8px; line-height: 1.2; margin-bottom: 3px;">
                    <strong style="color: #475569; min-width: 45px; flex-shrink: 0;">* Note :</strong>
                    <span style="color: #334155; font-weight: 500;">${line}</span>
                </div>
            `;
        }).join('');
    }

    htmlContent += commentedBreakers.map(item => {
        const color = getBreakerColor(item.breaker);
        return `
            <div style="display: flex; gap: 8px; line-height: 1.2;">
                <strong style="color: ${color}; min-width: 45px; flex-shrink: 0;"><span style="text-decoration: underline;">*${item.uid}</span> :</strong>
                <span style="color: #334155;">${item.comment}</span>
            </div>
        `;
    }).join('');

    list.innerHTML = htmlContent;
}

function normalizeRows() {
    if (!appState.rows) return;
    appState.rows.forEach(row => {
        // Ensure all spaces are strictly 1 module wide and split any wider spaces
        const splitBreakers = [];
        row.breakers.forEach(b => {
            if (b.isSpace || b.category === 'vide') {
                const w = getBreakerWidth(b);
                for (let i = 0; i < w; i++) {
                    splitBreakers.push({
                        id: Math.floor(Math.random() * 100000000),
                        category: 'vide',
                        width: 1,
                        isSpace: true
                    });
                }
            } else {
                splitBreakers.push(b);
            }
        });
        row.breakers = splitBreakers;

        // 1. Calculate current width of the row
        let currentWidth = 0;
        row.breakers.forEach(b => {
            currentWidth += getBreakerWidth(b);
        });

        // 2. Adjust spaces to fit the capacity (remove spaces from right to left if overflow)
        if (currentWidth > appState.rowCapacity) {
            for (let i = row.breakers.length - 1; i >= 0; i--) {
                if (row.breakers[i].isSpace || row.breakers[i].category === 'vide') {
                    currentWidth -= getBreakerWidth(row.breakers[i]);
                    row.breakers.splice(i, 1);
                    if (currentWidth <= appState.rowCapacity) break;
                }
            }
        }

        // Recalculate current width after downsizing
        currentWidth = 0;
        row.breakers.forEach(b => {
            currentWidth += getBreakerWidth(b);
        });

        // 3. Fill up to capacity with individual width-1 spaces if under capacity
        if (currentWidth < appState.rowCapacity) {
            const needed = appState.rowCapacity - currentWidth;
            for (let i = 0; i < needed; i++) {
                row.breakers.push({
                    id: Math.floor(Math.random() * 100000000),
                    category: 'vide',
                    width: 1,
                    isSpace: true
                });
            }
        }
    });
}

function renderAll() {
    normalizeRows();
    renderConfigurator();
    renderPreview();
    renderTestGrid();
    renderColorLegendsPreview();
    renderCommentsPreview();
    window.renderInspector();
}

function renderConfigurator() {
    const list = document.getElementById('rows-configuration-list');
    list.innerHTML = '';

    appState.rows.forEach((row, rowIndex) => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'panel-row-config';
        rowDiv.dataset.rowId = row.id;
        
        rowDiv.innerHTML = `
            <div class="row-config-header">
                <span class="row-title" style="font-weight: bold; color: var(--accent);">Rangée ${rowIndex + 1}</span>
                <button class="btn-danger" style="padding: 2px 6px; font-size: 0.7rem;" onclick="deleteRow(${row.id})">Suppr. Rangée</button>
            </div>
            
            <div class="modules-list" id="modules-list-${row.id}">
                <!-- Breakers list -->
            </div>
            <button class="btn-primary" style="width:100%; padding: 6px; margin-top:10px; font-size: 0.8rem;" onclick="addBreaker(${row.id})">+ Ajouter un Élément</button>
        `;
        list.appendChild(rowDiv);

        const modulesList = document.getElementById(`modules-list-${row.id}`);

        row.breakers.forEach((breaker) => {
            if (breaker.isSpace || breaker.category === 'vide') return; // Skip space elements in outline checklist

            const breakDiv = document.createElement('div');
            breakDiv.className = 'module-outline-item';
            breakDiv.draggable = false;
            breakDiv.dataset.breakerId = breaker.id;
            breakDiv.dataset.rowId = row.id;

            breakDiv.addEventListener('click', (e) => {
                window.selectBreaker(row.id, breaker.id, e);
            });

            const isSelected = window.selectedBreakers && window.selectedBreakers.some(sel => sel.breakerId === breaker.id);
            if (isSelected || window.selectedBreakerId === breaker.id) {
                breakDiv.classList.add('selected');
            }

            breakDiv.innerHTML = `
                <div style="display: flex; align-items: center; gap: 8px;">
                    <strong style="color: #60a5fa;">${breaker.customBrand || getCategoryLabel(breaker.category)}</strong>
                    <span class="outline-desc" style="color: var(--text-muted); font-size: 0.75rem; max-width: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                        ${breaker.description ? `- ${breaker.description}` : ''}
                    </span>
                </div>
                <button class="btn-danger" style="padding: 2px 6px; font-size: 0.65rem; border-radius: 4px;" onclick="event.stopPropagation(); deleteBreaker(${row.id}, ${breaker.id})">Suppr</button>
            `;
            modulesList.appendChild(breakDiv);
        });
    });
}

function getCategoryLabel(cat) {
    if (cat === 'vide') return 'Espace Vide';
    if (cat === 'differentiel') return 'Différentiel';
    if (cat === 'telerupteur') return 'Télérupteur';
    if (cat === 'contacteur') return 'Contacteur';
    if (cat === 'prise_modulaire') return 'Prise Mod.';
    if (cat === 'wattmetre') return 'Wattmètre';
    return 'Disjoncteur';
}

window.handleBreakerColorChange = function(rowId, breakerId, value) {
    const block = document.getElementById(`breaker-color-custom-block-${breakerId}`);
    if (value === 'custom') {
        block.style.display = 'block';
        updateBreaker(rowId, breakerId, 'color', 'custom');
    } else {
        block.style.display = 'none';
        updateBreaker(rowId, breakerId, 'color', value);
    }
    renderPreview();
};

window.handleBreakerRatingChange = function(rowId, breakerId, value) {
    const customInput = document.getElementById(`breaker-rating-custom-${breakerId}`);
    if (value === 'custom') {
        customInput.style.display = 'block';
        updateBreaker(rowId, breakerId, 'rating', customInput.value || '25A');
    } else {
        customInput.style.display = 'none';
        updateBreaker(rowId, breakerId, 'rating', value);
    }
    renderConfigurator();
};

window.handleBreakerTypeChange = function(rowId, breakerId, value) {
    const breaker = appState.rows.find(r => r.id === rowId)?.breakers.find(b => b.id === breakerId);
    if (!breaker) return;
    
    breaker.type = value;
    if (value === 'custom') {
        if (breaker.customIconType === 'none') {
            breaker.customIconType = 'emoji';
        }
    }
    renderAll();
};

window.updateBreakerIconType = function(rowId, breakerId, value) {
    const breaker = appState.rows.find(r => r.id === rowId)?.breakers.find(b => b.id === breakerId);
    if (breaker) {
        breaker.customIconType = value;
        renderAll();
    }
};

window.handleIconFileUpload = function(rowId, breakerId, inputEl) {
    const file = inputEl.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        updateBreaker(rowId, breakerId, 'customIconValue', e.target.result);
    };
    reader.readAsDataURL(file);
};

// Render dynamic panel visualization to the preview board
function renderPreview() {
    const board = document.getElementById('panel-board-preview');
    board.innerHTML = '';

    appState.rows.forEach((row, rowIndex) => {
        const rowEl = document.createElement('div');
        rowEl.className = 'din-rail-row';
        rowEl.dataset.rowId = row.id;

        rowEl.addEventListener('dblclick', (e) => {
            const sidebarRow = document.querySelector(`.panel-row-config[data-row-id="${row.id}"]`);
            if (sidebarRow) {
                sidebarRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
                sidebarRow.style.transition = 'outline 0.2s';
                sidebarRow.style.outline = '2px solid #60a5fa';
                setTimeout(() => {
                    sidebarRow.style.outline = '';
                }, 1000);
            }
        });

        rowEl.addEventListener('dragover', (e) => {
            e.preventDefault();
            const draggingEl = document.querySelector('.module-device.dragging');
            if (draggingEl) {
                const filler = rowEl.querySelector('.rail-filler');
                if (e.target === rowEl || e.target === filler) {
                    rowEl.insertBefore(draggingEl, filler);
                }
            }
        });

        let modulesCount = 0;

        row.breakers.forEach((breaker) => {
            const breakerEl = document.createElement('div');
            
            let breakerColorClass = '';
            if (breaker.color !== 'custom' && breaker.color !== 'none') {
                breakerColorClass = `tint-${breaker.color}`;
            }

            const hasIp = (breaker.connected && breaker.connectedType === 'wifi' && breaker.connectedIp);
            const hasIpClass = hasIp ? 'has-ip' : '';

            // Handle custom width attribute
            const width = getBreakerWidth(breaker);
            breakerEl.style.setProperty('--module-width', width);

            // Apply custom HSL color properties safely without overwriting other style properties
            if (breaker.color === 'custom') {
                const h = breaker.customHue || 120;
                breakerEl.style.setProperty('background-color', `hsl(${h}, 90%, 96%)`, 'important');
                breakerEl.style.setProperty('border-color', `hsl(${h}, 75%, 80%)`, 'important');
            }
            
            if (breaker.wired === undefined) {
                breaker.wired = !!breaker.on;
            }
            const isUnusedClass = breaker.unused ? 'status-unused' : '';
            const isWiredClass = breaker.wired ? 'status-wired' : '';
            const isSpace = (breaker.isSpace || breaker.category === 'vide');
            if (isSpace) {
                breakerEl.className = `module-device rail-space w-${width}`;
                breakerEl.draggable = true;
                breakerEl.dataset.breakerId = breaker.id;
                breakerEl.dataset.rowId = row.id;

                breakerEl.addEventListener('click', (e) => {
                    e.stopPropagation();
                    window.selectBreaker(row.id, breaker.id, e);
                });

                breakerEl.addEventListener('dragstart', (e) => {
                    breakerEl.classList.add('dragging');
                    e.dataTransfer.setData('text/plain', breaker.id);
                });

                breakerEl.addEventListener('dragend', () => {
                    breakerEl.classList.remove('dragging');
                    syncStateFromDOM();
                });

                breakerEl.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const draggingEl = document.querySelector('.module-device.dragging');
                    if (draggingEl && draggingEl !== breakerEl) {
                        const rect = breakerEl.getBoundingClientRect();
                        const next = (e.clientX - rect.left) > (rect.width / 2);
                        rowEl.insertBefore(draggingEl, next ? breakerEl.nextSibling : breakerEl);
                    }
                });

                breakerEl.innerHTML = '';
                rowEl.appendChild(breakerEl);
                modulesCount += width;
                return;
            }

            if (breaker.category === 'differentiel' || breaker.category === 'wattmetre') {
                breakerEl.className = `module-device module-diff w-${width} ${breakerColorClass} ${hasIpClass} ${isUnusedClass} ${isWiredClass}`;
            } else {
                breakerEl.className = `module-device module-breaker w-${width} ${breakerColorClass} ${hasIpClass} ${isUnusedClass} ${isWiredClass}`;
            }
            modulesCount += width;

            breakerEl.draggable = true;
            breakerEl.dataset.breakerId = breaker.id;
            breakerEl.dataset.rowId = row.id;

            breakerEl.addEventListener('click', (e) => {
                e.stopPropagation();
                window.selectBreaker(row.id, breaker.id, e);
            });

            breakerEl.addEventListener('dblclick', (e) => {
                e.stopPropagation();
                window.selectBreaker(row.id, breaker.id, e);
                const sidebarItem = document.querySelector(`.module-outline-item[data-breaker-id="${breaker.id}"]`);
                if (sidebarItem) {
                    sidebarItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    // Highlight effect on the sidebar item
                    sidebarItem.style.transition = 'outline 0.2s';
                    sidebarItem.style.outline = '2px solid #60a5fa';
                    setTimeout(() => {
                        sidebarItem.style.outline = '';
                    }, 1000);
                }
            });

            breakerEl.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                e.stopPropagation();
                window.selectBreaker(row.id, breaker.id, e);
                window.showContextMenu(e.pageX, e.pageY, row.id, breaker.id);
            });

            const isSelected = window.selectedBreakers && window.selectedBreakers.some(sel => sel.breakerId === breaker.id);
            if (isSelected || window.selectedBreakerId === breaker.id) {
                breakerEl.classList.add('selected');
            }

            breakerEl.addEventListener('dragstart', (e) => {
                breakerEl.classList.add('dragging');
                e.dataTransfer.setData('text/plain', breaker.id);
            });

            breakerEl.addEventListener('dragend', () => {
                breakerEl.classList.remove('dragging');
                syncStateFromDOM();
            });

            breakerEl.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const draggingEl = document.querySelector('.module-device.dragging');
                if (draggingEl && draggingEl !== breakerEl) {
                    const rect = breakerEl.getBoundingClientRect();
                    const next = (e.clientX - rect.left) > (rect.width / 2);
                    rowEl.insertBefore(draggingEl, next ? breakerEl.nextSibling : breakerEl);
                }
            });

            const toggleClass = breaker.on ? 'on' : 'off';
            
            let connectedBadgeHtml = '';
            if (breaker.connected) {
                const connIcon = connectedIcons[breaker.connectedType] || connectedIcons.wifi;
                connectedBadgeHtml = `<div class="device-connected-badge" title="Connecté par ${breaker.connectedType}">${connIcon}</div>`;
            }

            let tensionBadgeHtml = '';
            if (breaker.unused) {
                if (breaker.on) {
                    tensionBadgeHtml = `<div class="device-tension-badge powered" title="Sous tension (Cliquer pour couper)" onclick="event.stopPropagation(); window.toggleBreaker(${row.id}, ${breaker.id});">⚡</div>`;
                } else {
                    tensionBadgeHtml = `<div class="device-tension-badge outline" title="Hors tension (Cliquer pour alimenter)" onclick="event.stopPropagation(); window.toggleBreaker(${row.id}, ${breaker.id});">⚡</div>`;
                }
            }

            let elementBodyHtml = '';
            if (breaker.category === 'differentiel') {
                elementBodyHtml = `
                    <div class="device-spec">${breaker.ratingMa || '30mA'}</div>
                    <div class="device-test-btn">T</div>
                    <div class="device-toggle on"><div class="device-toggle-handle"></div></div>
                `;
            } else if (breaker.category === 'telerupteur') {
                elementBodyHtml = `
                    <div class="device-telerupteur-switch" onclick="event.stopPropagation(); window.toggleBreaker(${row.id}, ${breaker.id});"></div>
                    <span class="device-telerupteur-indicator">${breaker.on ? 'I' : '0'}</span>
                `;
            } else if (breaker.category === 'contacteur') {
                const cState = breaker.contactorState || 'auto';
                elementBodyHtml = `
                    <div class="device-contactor-selector" onclick="event.stopPropagation(); window.cycleContactorState(${row.id}, ${breaker.id});">
                        <div class="device-contactor-knob pos-${cState}"></div>
                    </div>
                `;
            } else if (breaker.category === 'prise_modulaire') {
                elementBodyHtml = `<div class="device-socket-outlet"></div>`;
            } else if (breaker.category === 'wattmetre') {
                elementBodyHtml = `
                    <div class="device-wattmeter-screen">${breaker.wattValue || '1250 W'}</div>
                    <div class="device-wattmeter-buttons">
                        <div class="device-wattmeter-btn"></div>
                        <div class="device-wattmeter-btn"></div>
                        <div class="device-wattmeter-btn"></div>
                    </div>
                `;
            } else {
                let iconHtml = '';
                if (breaker.type === 'custom') {
                    if ((breaker.customIconType === 'file' || breaker.customIconType === 'url') && breaker.customIconValue) {
                        iconHtml = `<img src="${breaker.customIconValue}" alt="icon">`;
                    } else {
                        iconHtml = `<span class="emoji-icon">${breaker.customIconValue || '⚙️'}</span>`;
                    }
                } else {
                    iconHtml = icons[breaker.type] || icons.other;
                }

                elementBodyHtml = `
                    <div class="device-type-icon">${iconHtml}</div>
                    <div class="device-toggle on">
                        <div class="device-toggle-handle"></div>
                    </div>
                `;
            }

            let labelDescriptionHtml = '&nbsp;';
            if (breaker.category === 'differentiel') {
                labelDescriptionHtml = `Type ${breaker.type || 'AC'}`;
            } else {
                labelDescriptionHtml = formatDescriptionHtml(breaker.description);
            }

            let commentBadgeHtml = '';
            if (breaker.comment) {
                const uid = getElementUID(row, breaker, rowIndex);
                commentBadgeHtml = `<div class="device-comment-uid" style="font-size: 6.5px; font-weight: bold; color: ${getBreakerColor(breaker)}; margin-top: 1px; text-decoration: underline;">*${uid}</div>`;
            }

            breakerEl.innerHTML = `
                ${tensionBadgeHtml}
                <div class="device-brand">${breaker.customBrand || getCategoryLabel(breaker.category)}</div>
                ${elementBodyHtml}
                <div class="device-label-area">
                    ${connectedBadgeHtml}
                    <span class="device-rating">${breaker.rating}</span>
                    <div class="device-description" title="${breaker.description}">${labelDescriptionHtml}</div>
                    ${commentBadgeHtml}
                    ${breaker.connected && breaker.connectedType === 'wifi' && breaker.connectedIp ? `<span class="device-ip">${breaker.connectedIp}</span>` : ''}
                </div>
            `;
            rowEl.appendChild(breakerEl);
        });

        if (modulesCount < appState.rowCapacity) {
            const filler = document.createElement('div');
            filler.className = 'rail-filler';
            rowEl.appendChild(filler);
        }

        board.appendChild(rowEl);
    });

    document.getElementById('cartouche-title').innerText = appState.projectTitle;
    document.getElementById('cartouche-address').innerText = appState.projectAddress;
    document.getElementById('cartouche-installer').innerText = appState.projectInstaller;
    
    const d = new Date(appState.projectDate);
    document.getElementById('cartouche-date').innerText = isNaN(d.getTime()) ? appState.projectDate : d.toLocaleDateString('fr-FR');
    setTimeout(adjustDescriptionFontSizes, 0);
}

// Render manual inspection log table (4 columns of Date du test with N° index)
function renderTestGrid() {
    const container = document.getElementById('test-grid-container');
    if (!appState.showTestGrid) {
        container.style.display = 'none';
        container.innerHTML = '';
        return;
    }

    container.style.display = 'block';
    
    const totalSlots = appState.testGridRows || 8;
    const tableRowsCount = Math.ceil(totalSlots / 4);

    let rowsHtml = '';
    for (let i = 0; i < tableRowsCount; i++) {
        const c1 = i * 4 + 1;
        const c2 = i * 4 + 2;
        const c3 = i * 4 + 3;
        const c4 = i * 4 + 4;
        
        rowsHtml += `
            <tr>
                <td style="font-weight: bold; background: #f1f5f9; text-align: center; font-size: 7.5px;">${c1}</td>
                <td></td>
                <td style="font-weight: bold; background: #f1f5f9; text-align: center; font-size: 7.5px;">${c2}</td>
                <td></td>
                <td style="font-weight: bold; background: #f1f5f9; text-align: center; font-size: 7.5px;">${c3}</td>
                <td></td>
                <td style="font-weight: bold; background: #f1f5f9; text-align: center; font-size: 7.5px;">${c4}</td>
                <td></td>
            </tr>
        `;
    }

    let tableHtml = `
        <div class="test-grid-header-label">Contrôle Mensuel des Différentiels (Date du test après appui sur le bouton "T")</div>
        <table class="test-grid-table">
            <thead>
                <tr>
                    <th style="width: 4%; text-align: center;">N°</th>
                    <th style="width: 21%;">Date du test</th>
                    <th style="width: 4%; text-align: center;">N°</th>
                    <th style="width: 21%;">Date du test</th>
                    <th style="width: 4%; text-align: center;">N°</th>
                    <th style="width: 21%;">Date du test</th>
                    <th style="width: 4%; text-align: center;">N°</th>
                    <th style="width: 21%;">Date du test</th>
                </tr>
            </thead>
            <tbody>
                ${rowsHtml}
            </tbody>
        </table>
    `;

    container.innerHTML = tableHtml;
}

function renderColorLegendsPreview() {
    const container = document.getElementById('color-legends-preview-container');
    const list = document.getElementById('color-legends-preview-list');
    if (!container || !list) return;

    list.innerHTML = '';
    let hasLegends = false;
    const colorsMap = {
        blue: { bg: '#eff6ff', border: '#93c5fd', name: 'Bleu' },
        green: { bg: '#f0fdf4', border: '#86efac', name: 'Vert' },
        yellow: { bg: '#fefce8', border: '#fde047', name: 'Jaune' },
        red: { bg: '#fef2f2', border: '#fca5a5', name: 'Rouge' },
        purple: { bg: '#faf5ff', border: '#d8b4fe', name: 'Violet' },
        orange: { bg: '#fff7ed', border: '#fdba74', name: 'Orange' },
        custom: { bg: 'linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet)', border: '#cbd5e1', name: 'Personnalisé' }
    };

    if (appState.colorLegends) {
        Object.keys(colorsMap).forEach(color => {
            const labelText = appState.colorLegends[color];
            if (labelText && labelText.trim()) {
                if (color === 'custom') {
                    // For custom color, search if there are actual custom hues used and display them individually
                    const customHuesUsed = new Set();
                    appState.rows.forEach(r => {
                        r.breakers.forEach(b => {
                            if (b.color === 'custom') {
                                customHuesUsed.add(b.customHue || 120);
                            }
                        });
                    });

                    customHuesUsed.forEach(hue => {
                        const customKey = `custom-${hue}`;
                        const labelTextCustom = appState.colorLegends[customKey] || "";
                        if (labelTextCustom.trim()) {
                            hasLegends = true;
                            const legendEl = document.createElement('div');
                            legendEl.style.display = 'flex';
                            legendEl.style.alignItems = 'center';
                            legendEl.style.gap = '6px';
                            legendEl.style.fontSize = '8px';

                            const colorBox = document.createElement('span');
                            colorBox.style.display = 'inline-block';
                            colorBox.style.width = '10px';
                            colorBox.style.height = '10px';
                            colorBox.style.borderRadius = '2px';
                            colorBox.style.border = '1px solid black';
                            colorBox.style.backgroundColor = `hsl(${hue}, 90%, 96%)`;
                            colorBox.style.borderColor = `hsl(${hue}, 75%, 80%)`;

                            const textSpan = document.createElement('span');
                            textSpan.style.fontWeight = 'bold';
                            textSpan.innerText = labelTextCustom;

                            legendEl.appendChild(colorBox);
                            legendEl.appendChild(textSpan);
                            list.appendChild(legendEl);
                        }
                    });

                    // Still check if the general "custom" description has text
                    if (labelText.trim()) {
                        hasLegends = true;
                        const legendEl = document.createElement('div');
                        legendEl.style.display = 'flex';
                        legendEl.style.alignItems = 'center';
                        legendEl.style.gap = '6px';
                        legendEl.style.fontSize = '8px';

                        const colorBox = document.createElement('span');
                        colorBox.style.display = 'inline-block';
                        colorBox.style.width = '10px';
                        colorBox.style.height = '10px';
                        colorBox.style.borderRadius = '2px';
                        colorBox.style.border = '1px solid black';
                        colorBox.style.background = colorsMap[color].bg;
                        colorBox.style.borderColor = colorsMap[color].border;

                        const textSpan = document.createElement('span');
                        textSpan.style.fontWeight = 'bold';
                        textSpan.innerText = labelText;

                        legendEl.appendChild(colorBox);
                        legendEl.appendChild(textSpan);
                        list.appendChild(legendEl);
                    }
                } else {
                    hasLegends = true;
                    const legendEl = document.createElement('div');
                    legendEl.style.display = 'flex';
                    legendEl.style.alignItems = 'center';
                    legendEl.style.gap = '6px';
                    legendEl.style.fontSize = '8px';

                    const colorBox = document.createElement('span');
                    colorBox.style.display = 'inline-block';
                    colorBox.style.width = '10px';
                    colorBox.style.height = '10px';
                    colorBox.style.borderRadius = '2px';
                    colorBox.style.border = '1px solid black';
                    colorBox.style.backgroundColor = colorsMap[color].bg;
                    colorBox.style.borderColor = colorsMap[color].border;

                    const textSpan = document.createElement('span');
                    textSpan.style.fontWeight = 'bold';
                    textSpan.innerText = labelText;

                    legendEl.appendChild(colorBox);
                    legendEl.appendChild(textSpan);
                    list.appendChild(legendEl);
                }
            }
        });
    }

    // Check if there is at least one unused module (Réserve)
    let hasUnused = false;
    appState.rows.forEach(r => {
        r.breakers.forEach(b => {
            if (b.unused) {
                hasUnused = true;
            }
        });
    });

    if (hasUnused) {
        hasLegends = true;
        const unusedLegendEl = document.createElement('div');
        unusedLegendEl.style.display = 'flex';
        unusedLegendEl.style.alignItems = 'center';
        unusedLegendEl.style.gap = '6px';
        unusedLegendEl.style.fontSize = '8px';

        const patternBox = document.createElement('span');
        patternBox.style.display = 'inline-block';
        patternBox.style.width = '10px';
        patternBox.style.height = '10px';
        patternBox.style.borderRadius = '2px';
        patternBox.style.border = '1px dashed #94a3b8';
        patternBox.style.background = 'repeating-linear-gradient(45deg, #f1f5f9, #f1f5f9 2px, #cbd5e1 2px, #cbd5e1 4px)';

        const textSpan = document.createElement('span');
        textSpan.style.fontWeight = 'bold';
        textSpan.innerText = 'Réserve (Non utilisé)';

        unusedLegendEl.appendChild(patternBox);
        unusedLegendEl.appendChild(textSpan);
        list.appendChild(unusedLegendEl);
    }

    // Check if there is at least one unused module under tension (class powered, meaning unused is true and on is true)
    let hasUnusedPowered = false;
    appState.rows.forEach(r => {
        r.breakers.forEach(b => {
            if (b.unused && b.on === true) {
                hasUnusedPowered = true;
            }
        });
    });

    if (hasUnusedPowered) {
        hasLegends = true;
        const tensionLegendEl = document.createElement('div');
        tensionLegendEl.style.display = 'flex';
        tensionLegendEl.style.alignItems = 'center';
        tensionLegendEl.style.gap = '6px';
        tensionLegendEl.style.fontSize = '8px';

        const tensionIcon = document.createElement('span');
        tensionIcon.style.display = 'inline-block';
        tensionIcon.style.width = '10px';
        tensionIcon.style.height = '10px';
        tensionIcon.style.textAlign = 'center';
        tensionIcon.style.lineHeight = '10px';
        tensionIcon.style.fontSize = '9px';
        tensionIcon.style.color = '#eab308';
        tensionIcon.innerText = '⚡';

        const tensionText = document.createElement('span');
        tensionText.style.fontWeight = 'bold';
        tensionText.innerText = 'Sous Tension';

        tensionLegendEl.appendChild(tensionIcon);
        tensionLegendEl.appendChild(tensionText);
        list.appendChild(tensionLegendEl);
    }

    if (hasLegends) {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }

    renderDynamicCustomLegendsSidebar();
}

function renderDynamicCustomLegendsSidebar() {
    const sidebarContainer = document.getElementById('dynamic-custom-legends-container');
    if (!sidebarContainer) return;

    // Scan for custom colors
    const customHuesUsed = new Set();
    appState.rows.forEach(r => {
        r.breakers.forEach(b => {
            if (b.color === 'custom') {
                customHuesUsed.add(b.customHue || 120);
            }
        });
    });

    // We build input fields for each custom hue found
    // If the input was focused, we might want to try to preserve it, but simple replacement is fine for basic key entry
    const currentValues = {};
    sidebarContainer.querySelectorAll('input').forEach(inp => {
        currentValues[inp.dataset.hue] = inp.value;
    });

    sidebarContainer.innerHTML = '';
    
    customHuesUsed.forEach(hue => {
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.gap = '8px';

        const colorBox = document.createElement('span');
        colorBox.style.display = 'inline-block';
        colorBox.style.width = '12px';
        colorBox.style.height = '12px';
        colorBox.style.borderRadius = '2px';
        colorBox.style.border = '1px solid white';
        colorBox.style.backgroundColor = `hsl(${hue}, 90%, 96%)`;
        colorBox.style.borderColor = `hsl(${hue}, 75%, 80%)`;

        const input = document.createElement('input');
        input.type = 'text';
        input.dataset.hue = hue;
        input.placeholder = `Légende pour Teinte ${hue}°...`;
        input.style.padding = '6px';
        input.style.fontSize = '0.8rem';
        
        const customKey = `custom-${hue}`;
        input.value = appState.colorLegends[customKey] || "";

        input.addEventListener('input', (e) => {
            appState.colorLegends[customKey] = e.target.value;
            window.saveState();
            
            // Re-render preview legends without destroying current inputs focus
            const list = document.getElementById('color-legends-preview-list');
            const previewContainer = document.getElementById('color-legends-preview-container');
            if (list && previewContainer) {
                list.innerHTML = '';
                let hasL = false;
                const colorsMap = {
                    blue: '#eff6ff', green: '#f0fdf4', yellow: '#fefce8', red: '#fef2f2', purple: '#faf5ff', orange: '#fff7ed'
                };
                
                // Redraw preview elements
                Object.keys(colorsMap).forEach(col => {
                    const txt = appState.colorLegends[col];
                    if (txt && txt.trim()) {
                        hasL = true;
                        drawPreviewLegendItem(list, colorsMap[col], colorsMap[col], txt);
                    }
                });

                // Custom hues
                const activeHues = new Set();
                appState.rows.forEach(r => r.breakers.forEach(b => { if (b.color === 'custom') activeHues.add(b.customHue || 120); }));
                activeHues.forEach(h => {
                    const txt = appState.colorLegends[`custom-${h}`];
                    if (txt && txt.trim()) {
                        hasL = true;
                        drawPreviewLegendItem(list, `hsl(${h}, 90%, 96%)`, `hsl(${h}, 75%, 80%)`, txt);
                    }
                });

                if (appState.colorLegends.custom && appState.colorLegends.custom.trim()) {
                    hasL = true;
                    drawPreviewLegendItem(list, 'linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet)', '#cbd5e1', appState.colorLegends.custom, true);
                }

                previewContainer.style.display = hasL ? 'block' : 'none';
            }
        });

        div.appendChild(colorBox);
        div.appendChild(input);
        sidebarContainer.appendChild(div);
    });
}

function drawPreviewLegendItem(list, bg, border, text, isGradient = false) {
    const legendEl = document.createElement('div');
    legendEl.style.display = 'flex';
    legendEl.style.alignItems = 'center';
    legendEl.style.gap = '6px';
    legendEl.style.fontSize = '8px';

    const colorBox = document.createElement('span');
    colorBox.style.display = 'inline-block';
    colorBox.style.width = '10px';
    colorBox.style.height = '10px';
    colorBox.style.borderRadius = '2px';
    colorBox.style.border = '1px solid black';
    if (isGradient) {
        colorBox.style.background = bg;
    } else {
        colorBox.style.backgroundColor = bg;
    }
    colorBox.style.borderColor = border;

    const textSpan = document.createElement('span');
    textSpan.style.fontWeight = 'bold';
    textSpan.innerText = text;

    legendEl.appendChild(colorBox);
    legendEl.appendChild(textSpan);
    list.appendChild(legendEl);
}

function syncStateFromDOM() {
    const newRows = [];
    const previewRows = document.querySelectorAll('.din-rail-row');
    
    previewRows.forEach((rowEl) => {
        const rowId = parseInt(rowEl.dataset.rowId);
        const originalRow = appState.rows.find(r => r.id === rowId) || { id: rowId, breakers: [] };
        const newBreakersList = [];
        
        const moduleDevices = rowEl.querySelectorAll('.module-device');
        moduleDevices.forEach((deviceEl) => {
            const breakerId = parseInt(deviceEl.dataset.breakerId);
            
            let foundBreaker = null;
            appState.rows.forEach(r => {
                const b = r.breakers.find(item => item.id === breakerId);
                if (b) foundBreaker = b;
            });

            if (foundBreaker) {
                newBreakersList.push(foundBreaker);
            }
        });
        
        newRows.push({
            id: rowId,
            breakers: newBreakersList
        });
    });

    appState.rows = newRows;
    window.saveState();
    renderAll();
}

window.cycleContactorState = function(rowId, breakerId) {
    const row = appState.rows.find(r => r.id === rowId);
    if (row) {
        const breaker = row.breakers.find(b => b.id === breakerId);
        if (breaker) {
            const current = breaker.contactorState || 'auto';
            let next = 'auto';
            if (current === 'auto') next = '1';
            else if (current === '1') next = '0';
            else next = 'auto';
            
            breaker.contactorState = next;
            breaker.on = (next === '1' || next === 'auto');
            window.saveState();
            renderPreview();
        }
    }
};

window.deleteRow = function(id) {
    appState.rows = appState.rows.filter(r => r.id !== id);
    window.saveState();
    renderAll();
};

window.updateDiff = function(rowId, prop, value) {};

window.addBreaker = function(rowId) {
    const row = appState.rows.find(r => r.id === rowId);
    if (row) {
        const nextId = Date.now() + Math.floor(Math.random() * 1000);
        const newBreaker = {
            id: nextId,
            category: 'disjoncteur',
            rating: '16A',
            type: 'socket',
            description: '',
            on: true,
            wired: true,
            color: 'none',
            customHue: 120,
            customIconType: 'none',
            customIconValue: '',
            connected: false,
            connectedType: 'wifi',
            connectedIp: '',
            width: 1
        };

        // Find first empty space module that can fit this breaker (width >= 1)
        const spaceIndex = row.breakers.findIndex(b => (b.isSpace || b.category === 'vide') && (b.width >= newBreaker.width));
        if (spaceIndex !== -1) {
            const space = row.breakers[spaceIndex];
            const remainingWidth = space.width - newBreaker.width;
            
            if (remainingWidth > 0) {
                // Resize space and insert breaker before it
                space.width = remainingWidth;
                row.breakers.splice(spaceIndex, 0, newBreaker);
            } else {
                // Replace space completely
                row.breakers[spaceIndex] = newBreaker;
            }
        } else {
            row.breakers.push(newBreaker);
        }
        window.saveState();
        renderAll();
    }
};

window.deleteBreaker = function(rowId, breakerId) {
    const row = appState.rows.find(r => r.id === rowId);
    if (row) {
        const index = row.breakers.findIndex(b => b.id === breakerId);
        if (index !== -1) {
            const breaker = row.breakers[index];
            const width = getBreakerWidth(breaker);
            
            // Create space elements of width 1 to replace it
            const spaces = [];
            for (let k = 0; k < width; k++) {
                spaces.push({
                    id: Math.floor(Math.random() * 100000000),
                    category: 'vide',
                    width: 1,
                    isSpace: true
                });
            }
            row.breakers.splice(index, 1, ...spaces);
        }
        window.saveState();
        renderAll();
    }
};

window.updateBreaker = function(rowId, breakerId, prop, value) {
    const row = appState.rows.find(r => r.id === rowId);
    if (row) {
        const index = row.breakers.findIndex(b => b.id === breakerId);
        if (index !== -1) {
            const breaker = row.breakers[index];
            const oldWidth = getBreakerWidth(breaker);
            
            if (prop === 'width' || prop === 'category') {
                let newWidth = getBreakerWidth(breaker);
                if (prop === 'width') {
                    newWidth = parseInt(value);
                } else if (prop === 'category') {
                    if (value === 'differentiel' || value === 'wattmetre' || value === 'prise_modulaire') {
                        newWidth = 2;
                    } else {
                        newWidth = 1;
                    }
                }

                if (newWidth !== oldWidth) {
                    const diff = newWidth - oldWidth;
                    if (diff > 0) {
                        // Expanding: try to absorb spaces immediately following/preceding the breaker
                        let remainingToAbsorb = diff;
                        
                        // Absorb from right adjacent spaces
                        let checkIdx = index + 1;
                        while (checkIdx < row.breakers.length && remainingToAbsorb > 0) {
                            const target = row.breakers[checkIdx];
                            if (target.isSpace || target.category === 'vide') {
                                const absorbable = Math.min(target.width, remainingToAbsorb);
                                target.width -= absorbable;
                                remainingToAbsorb -= absorbable;
                                if (target.width <= 0) {
                                    row.breakers.splice(checkIdx, 1);
                                } else {
                                    checkIdx++;
                                }
                            } else {
                                break;
                            }
                        }

                        // If still need to absorb, look at left adjacent spaces
                        checkIdx = index - 1;
                        while (checkIdx >= 0 && remainingToAbsorb > 0) {
                            const target = row.breakers[checkIdx];
                            if (target.isSpace || target.category === 'vide') {
                                const absorbable = Math.min(target.width, remainingToAbsorb);
                                target.width -= absorbable;
                                remainingToAbsorb -= absorbable;
                                if (target.width <= 0) {
                                    row.breakers.splice(checkIdx, 1);
                                    checkIdx--;
                                } else {
                                    checkIdx--;
                                }
                            } else {
                                break;
                            }
                        }
                    } else if (diff < 0) {
                        // Shrinking: spawn space elements next to it
                        const spawnWidth = Math.abs(diff);
                        const spaces = [];
                        for (let k = 0; k < spawnWidth; k++) {
                            spaces.push({
                                id: Math.floor(Math.random() * 100000000),
                                category: 'vide',
                                width: 1,
                                isSpace: true
                            });
                        }
                        row.breakers.splice(index + 1, 0, ...spaces);
                    }
                }
            }

            breaker[prop] = value;
            if (prop === 'wired') {
                breaker.on = value;
            } else if (prop === 'on') {
                breaker.wired = value;
            } else if (prop === 'unused') {
                if (!value) {
                    breaker.wired = true;
                    breaker.on = true;
                }
            } else if (prop === 'category') {
                if (value === 'differentiel' || value === 'wattmetre' || value === 'prise_modulaire') {
                    breaker.width = 2;
                } else {
                    breaker.width = 1;
                }
                breaker.isSpace = (value === 'vide');
                if (breaker.isSpace) {
                    breaker.description = '';
                }
            }
            window.saveState();
            renderPreview();
        }
    }
};

window.toggleBreaker = function(rowId, breakerId) {
    const row = appState.rows.find(r => r.id === rowId);
    if (row) {
        const breaker = row.breakers.find(b => b.id === breakerId);
        if (breaker) {
            breaker.on = !breaker.on;
            breaker.wired = breaker.on;
            window.saveState();
            renderAll();
        }
    }
};

window.renderInspector = function() {
    const container = document.getElementById('inspector-content');
    if (!container) return;

    if (!window.selectedBreakers || window.selectedBreakers.length === 0) {
        container.innerHTML = `
            <div class="empty-inspector-state" style="text-align: center; color: var(--text-muted); margin-top: 50px; font-size: 0.85rem; padding: 20px; border: 1px dashed var(--border-color); border-radius: 8px;">
                <p>Sélectionnez un ou plusieurs éléments sur le tableau ou dans la liste pour afficher leurs propriétés.</p>
            </div>
        `;
        return;
    }

    const selectedList = [];
    window.selectedBreakers.forEach(sel => {
        const row = appState.rows.find(r => r.id === sel.rowId);
        if (row) {
            const b = row.breakers.find(item => item.id === sel.breakerId);
            if (b) selectedList.push(b);
        }
    });

    if (selectedList.length === 0) {
        window.selectedBreakers = [];
        window.selectedBreakerId = null;
        window.selectedRowId = null;
        container.innerHTML = `
            <div class="empty-inspector-state" style="text-align: center; color: var(--text-muted); margin-top: 50px; font-size: 0.85rem; padding: 20px; border: 1px dashed var(--border-color); border-radius: 8px;">
                <p>Sélectionnez un ou plusieurs éléments sur le tableau ou dans la liste pour afficher leurs propriétés.</p>
            </div>
        `;
        return;
    }

    // Helper functions for checking mixed values
    const getSharedValue = (prop, defaultValue) => {
        const first = selectedList[0][prop];
        return selectedList.every(b => b[prop] === first) ? first : defaultValue;
    };

    const isMixed = (prop) => {
        if (selectedList.length <= 1) return false;
        const first = selectedList[0][prop];
        return !selectedList.every(b => b[prop] === first);
    };

    const setGroupProperty = (prop, value) => {
        selectedList.forEach(b => {
            // Find the rowId for this breaker
            let rowId = null;
            for (const r of appState.rows) {
                if (r.breakers.some(item => item.id === b.id)) {
                    rowId = r.id;
                    break;
                }
            }
            if (rowId !== null) {
                window.updateBreaker(rowId, b.id, prop, value);
            } else {
                b[prop] = value;
                if (prop === 'wired') {
                    b.on = value;
                } else if (prop === 'on') {
                    b.wired = value;
                } else if (prop === 'unused') {
                    if (!value) {
                        b.wired = true;
                        b.on = true;
                    }
                } else if (prop === 'category') {
                    if (value === 'differentiel' || value === 'wattmetre' || value === 'prise_modulaire') {
                        b.width = 2;
                    } else {
                        b.width = 1;
                    }
                    b.isSpace = (value === 'vide');
                    if (b.isSpace) {
                        b.description = '';
                    }
                }
            }
        });
        window.saveState();
        renderAll();
    };

    // Determine current values or mixed placeholders
    const sharedCategory = getSharedValue('category', 'mixed');
    const sharedDescription = getSharedValue('description', '');
    const sharedWidth = getSharedValue('width', 'mixed');
    const sharedRating = getSharedValue('rating', 'mixed');
    const sharedRatingMa = getSharedValue('ratingMa', 'mixed');
    const sharedType = getSharedValue('type', 'mixed');
    const sharedCustomIconType = getSharedValue('customIconType', 'mixed');
    const sharedCustomIconValue = getSharedValue('customIconValue', '');
    const sharedContactorState = getSharedValue('contactorState', 'mixed');
    const sharedWattValue = getSharedValue('wattValue', '');
    const sharedColor = getSharedValue('color', 'mixed');
    const sharedCustomHue = getSharedValue('customHue', 120);
    const sharedConnectedType = getSharedValue('connectedType', 'mixed');
    const sharedConnectedIp = getSharedValue('connectedIp', '');
    const sharedCustomBrand = getSharedValue('customBrand', '') || '';
    const sharedComment = getSharedValue('comment', '') || '';

    const allUnused = selectedList.every(b => b.unused);
    const mixedUnused = !allUnused && selectedList.some(b => b.unused);
    
    const allWired = selectedList.every(b => b.wired);
    const mixedWired = !allWired && selectedList.some(b => b.wired !== false);

    const allConnected = selectedList.every(b => b.connected);
    const mixedConnected = !allConnected && selectedList.some(b => b.connected);

    let html = `
        <div class="inspector-form">
            ${selectedList.length > 1 ? `
                <div style="font-size: 0.8rem; font-weight: 600; color: var(--accent); margin-bottom: 12px; background: rgba(59,130,246,0.1); border: 1px solid var(--border-color); padding: 8px; border-radius: 4px; text-align: center;">
                    Multi-sélection : ${selectedList.length} éléments
                </div>
            ` : ''}

            <!-- General Settings (Category) -->
            <div class="form-group">
                <label>Catégorie</label>
                <select id="inspector-category">
                    ${sharedCategory === 'mixed' ? '<option value="mixed" selected disabled>Mixte / Valeurs différentes</option>' : ''}
                    <option value="vide" ${sharedCategory === 'vide' ? 'selected' : ''}>Espace Vide</option>
                    <option value="differentiel" ${sharedCategory === 'differentiel' ? 'selected' : ''}>Différentiel</option>
                    <option value="disjoncteur" ${sharedCategory === 'disjoncteur' ? 'selected' : ''}>Disjoncteur</option>
                    <option value="telerupteur" ${sharedCategory === 'telerupteur' ? 'selected' : ''}>Télérupteur</option>
                    <option value="contacteur" ${sharedCategory === 'contacteur' ? 'selected' : ''}>Contacteur</option>
                    <option value="prise_modulaire" ${sharedCategory === 'prise_modulaire' ? 'selected' : ''}>Prise Modulaire</option>
                    <option value="wattmetre" ${sharedCategory === 'wattmetre' ? 'selected' : ''}>Wattmètre</option>
                </select>
            </div>
    `;

    if (sharedCategory === 'vide') {
        html += `</div>`;
        container.innerHTML = html;
        const elCategory = document.getElementById('inspector-category');
        if (elCategory) elCategory.addEventListener('change', (e) => {
            setGroupProperty('category', e.target.value);
        });
        return;
    }

    html += `
            <div class="form-group">
                <label>Marque / En-tête (Optionnel)</label>
                <input type="text" id="inspector-custom-brand" value="${sharedCustomBrand}" placeholder="${isMixed('customBrand') ? 'Mixte / Valeurs différentes' : getCategoryLabel(sharedCategory)}">
            </div>

            <!-- Mode Status Group -->
            <div class="form-group" style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: 6px; padding: 12px; margin-bottom: 15px;">
                <label style="display: flex; align-items: center; gap: 8px; font-weight: normal; cursor: pointer; margin-bottom: ${allUnused ? '8px' : '0'}; user-select: none;">
                    <input type="checkbox" id="inspector-unused" style="width: auto;" ${allUnused ? 'checked' : ''}>
                    <span>Mode Réserve (Non utilisé) ⚙ ${mixedUnused ? '<span style="font-size:0.65rem;color:var(--text-muted);">(Mixte)</span>' : ''}</span>
                </label>
                <label id="inspector-wired-container" style="display: ${allUnused ? 'flex' : 'none'}; align-items: center; gap: 8px; font-weight: normal; cursor: pointer; user-select: none; margin-bottom: 0;">
                    <input type="checkbox" id="inspector-wired" style="width: auto;" ${allWired ? 'checked' : ''}>
                    <span>Câblé / Branché (Sous tension) ⚡ ${mixedWired ? '<span style="font-size:0.65rem;color:var(--text-muted);">(Mixte)</span>' : ''}</span>
                </label>
            </div>

            <div class="form-group">
                <label>Description</label>
                <textarea id="inspector-description" rows="1" style="resize: none; overflow-y: hidden; min-height: 38px;" placeholder="${isMixed('description') ? 'Mixte / Valeurs différentes' : 'Ex: Éclairage Salon'}">${sharedDescription}</textarea>
            </div>

            <div class="form-group">
                <label>Commentaire (Optionnel)</label>
                <textarea id="inspector-comment" rows="1" style="resize: none; overflow-y: hidden; min-height: 38px;" placeholder="${isMixed('comment') ? 'Mixte / Valeurs différentes' : 'Ex: Alimentation plaque cuisson'}">${sharedComment}</textarea>
            </div>

            <div class="form-group">
                <label>Largeur (Modules)</label>
                <select id="inspector-width">
                    ${sharedWidth === 'mixed' ? '<option value="mixed" selected disabled>Mixte / Valeurs différentes</option>' : ''}
                    <option value="1" ${sharedWidth === 1 ? 'selected' : ''}>1 Module</option>
                    <option value="2" ${sharedWidth === 2 ? 'selected' : ''}>2 Modules</option>
                    <option value="3" ${sharedWidth === 3 ? 'selected' : ''}>3 Modules</option>
                    <option value="4" ${sharedWidth === 4 ? 'selected' : ''}>4 Modules</option>
                </select>
            </div>
    `;

    // Category specific fields
    if (sharedCategory === 'differentiel') {
        const standardRatings = ['16A', '25A', '40A', '63A'];
        const isCustomRating = sharedRating !== 'mixed' && sharedRating && !standardRatings.includes(sharedRating);
        html += `
            <div class="form-group">
                <label>Calibre (Rating)</label>
                <select id="inspector-rating">
                    ${sharedRating === 'mixed' ? '<option value="mixed" selected disabled>Mixte / Valeurs différentes</option>' : ''}
                    <option value="16A" ${sharedRating === '16A' ? 'selected' : ''}>16A</option>
                    <option value="25A" ${sharedRating === '25A' ? 'selected' : ''}>25A</option>
                    <option value="40A" ${sharedRating === '40A' ? 'selected' : ''}>40A</option>
                    <option value="63A" ${sharedRating === '63A' ? 'selected' : ''}>63A</option>
                    <option value="custom" ${isCustomRating ? 'selected' : ''}>Personnalisé...</option>
                </select>
                <input type="text" id="inspector-rating-custom" value="${sharedRating === 'mixed' ? '' : (sharedRating || '')}" placeholder="Ex: 80A" style="margin-top: 5px; display: ${isCustomRating ? 'block' : 'none'};">
            </div>
            <div class="form-group">
                <label>Sensibilité (mA)</label>
                <select id="inspector-rating-ma">
                    ${sharedRatingMa === 'mixed' ? '<option value="mixed" selected disabled>Mixte / Valeurs différentes</option>' : ''}
                    <option value="30mA" ${sharedRatingMa === '30mA' ? 'selected' : ''}>30mA</option>
                    <option value="100mA" ${sharedRatingMa === '100mA' ? 'selected' : ''}>100mA</option>
                    <option value="300mA" ${sharedRatingMa === '300mA' ? 'selected' : ''}>300mA</option>
                    <option value="500mA" ${sharedRatingMa === '500mA' ? 'selected' : ''}>500mA</option>
                </select>
            </div>
            <div class="form-group">
                <label>Type de Différentiel</label>
                <select id="inspector-type">
                    ${sharedType === 'mixed' ? '<option value="mixed" selected disabled>Mixte / Valeurs différentes</option>' : ''}
                    <option value="AC" ${sharedType === 'AC' ? 'selected' : ''}>Type AC (Standard)</option>
                    <option value="A" ${sharedType === 'A' ? 'selected' : ''}>Type A (Spécialisé)</option>
                    <option value="F" ${sharedType === 'F' ? 'selected' : ''}>Type F (Immunisé)</option>
                    <option value="B" ${sharedType === 'B' ? 'selected' : ''}>Type B (Courant continu)</option>
                </select>
            </div>
        `;
    } else if (sharedCategory === 'disjoncteur') {
        const standardRatings = ['2A', '10A', '16A', '20A', '32A', '40A'];
        const isCustomRating = sharedRating !== 'mixed' && sharedRating && !standardRatings.includes(sharedRating);
        html += `
            <div class="form-group">
                <label>Calibre (Rating)</label>
                <select id="inspector-rating">
                    ${sharedRating === 'mixed' ? '<option value="mixed" selected disabled>Mixte / Valeurs différentes</option>' : ''}
                    <option value="2A" ${sharedRating === '2A' ? 'selected' : ''}>2A</option>
                    <option value="10A" ${sharedRating === '10A' ? 'selected' : ''}>10A</option>
                    <option value="16A" ${sharedRating === '16A' ? 'selected' : ''}>16A</option>
                    <option value="20A" ${sharedRating === '20A' ? 'selected' : ''}>20A</option>
                    <option value="32A" ${sharedRating === '32A' ? 'selected' : ''}>32A</option>
                    <option value="40A" ${sharedRating === '40A' ? 'selected' : ''}>40A</option>
                    <option value="custom" ${isCustomRating ? 'selected' : ''}>Personnalisé...</option>
                </select>
                <input type="text" id="inspector-rating-custom" value="${sharedRating === 'mixed' ? '' : (sharedRating || '')}" placeholder="Ex: 25A" style="margin-top: 5px; display: ${isCustomRating ? 'block' : 'none'};">
            </div>
            <div class="form-group">
                <label>Usage / Icône</label>
                <select id="inspector-type">
                    ${sharedType === 'mixed' ? '<option value="mixed" selected disabled>Mixte / Valeurs différentes</option>' : ''}
                    <option value="lighting" ${sharedType === 'lighting' ? 'selected' : ''}>💡 Éclairage</option>
                    <option value="socket" ${sharedType === 'socket' ? 'selected' : ''}>🔌 Prise de courant</option>
                    <option value="oven" ${sharedType === 'oven' ? 'selected' : ''}>🍳 Four</option>
                    <option value="wash_machine" ${sharedType === 'wash_machine' ? 'selected' : ''}>🧺 Lave-linge</option>
                    <option value="dry_machine" ${sharedType === 'dry_machine' ? 'selected' : ''}>💨 Sèche-linge</option>
                    <option value="heater" ${sharedType === 'heater' ? 'selected' : ''}>🌡️ Chauffage</option>
                    <option value="cooktop" ${sharedType === 'cooktop' ? 'selected' : ''}>🥘 Plaque de cuisson</option>
                    <option value="fridge" ${sharedType === 'fridge' ? 'selected' : ''}>❄️ Réfrigérateur</option>
                    <option value="roller_shutter" ${sharedType === 'roller_shutter' ? 'selected' : ''}>🪟 Volet roulant</option>
                    <option value="vmc" ${sharedType === 'vmc' ? 'selected' : ''}>🌀 VMC</option>
                    <option value="other" ${sharedType === 'other' ? 'selected' : ''}>⚡ Autre / Usage général</option>
                    <option value="custom" ${sharedType === 'custom' ? 'selected' : ''}>🎨 Icône personnalisée...</option>
                </select>
            </div>
        `;

        if (sharedType === 'custom') {
            html += `
                <div class="form-group" style="padding-left: 10px; border-left: 2px solid var(--border-color); margin-top: 5px;">
                    <label>Type d'icône</label>
                    <select id="inspector-custom-icon-type">
                        ${sharedCustomIconType === 'mixed' ? '<option value="mixed" selected disabled>Mixte / Valeurs différentes</option>' : ''}
                        <option value="emoji" ${sharedCustomIconType === 'emoji' ? 'selected' : ''}>Emoji</option>
                        <option value="file" ${sharedCustomIconType === 'file' ? 'selected' : ''}>Image (Fichier)</option>
                        <option value="url" ${sharedCustomIconType === 'url' ? 'selected' : ''}>Image (Lien URL)</option>
                    </select>
                    
                    ${sharedCustomIconType === 'file' ? `
                        <label style="margin-top: 8px;">Fichier Image</label>
                        <input type="file" id="inspector-custom-icon-file" accept="image/*">
                        ${sharedCustomIconValue ? `<p style="font-size: 0.65rem; color: var(--accent); margin-top: 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Fichier chargé</p>` : ''}
                    ` : sharedCustomIconType === 'url' ? `
                        <label style="margin-top: 8px;">Lien URL de l'image</label>
                        <input type="text" id="inspector-custom-icon-url" value="${sharedCustomIconValue}" placeholder="${isMixed('customIconValue') ? 'Mixte' : 'https://example.com/icon.png'}">
                    ` : `
                        <label style="margin-top: 8px;">Emoji</label>
                        <input type="text" id="inspector-custom-icon-emoji" value="${sharedCustomIconValue}" placeholder="${isMixed('customIconValue') ? 'Mixte' : '⚙️'}" maxLength="2">
                    `}
                </div>
            `;
        }
    } else if (sharedCategory === 'telerupteur' || sharedCategory === 'contacteur' || sharedCategory === 'prise_modulaire' || sharedCategory === 'wattmetre') {
        const standardRatings = ['16A', '20A', '32A'];
        const isCustomRating = sharedRating !== 'mixed' && sharedRating && !standardRatings.includes(sharedRating);
        html += `
            <div class="form-group">
                <label>Calibre (Rating)</label>
                <select id="inspector-rating">
                    ${sharedRating === 'mixed' ? '<option value="mixed" selected disabled>Mixte / Valeurs différentes</option>' : ''}
                    <option value="16A" ${sharedRating === '16A' ? 'selected' : ''}>16A</option>
                    <option value="20A" ${sharedRating === '20A' ? 'selected' : ''}>20A</option>
                    <option value="32A" ${sharedRating === '32A' ? 'selected' : ''}>32A</option>
                    <option value="custom" ${isCustomRating ? 'selected' : ''}>Personnalisé...</option>
                </select>
                <input type="text" id="inspector-rating-custom" value="${sharedRating === 'mixed' ? '' : (sharedRating || '')}" placeholder="Ex: 25A" style="margin-top: 5px; display: ${isCustomRating ? 'block' : 'none'};">
            </div>
        `;

        if (sharedCategory === 'contacteur') {
            html += `
                <div class="form-group">
                    <label>Position du Contacteur</label>
                    <select id="inspector-contactor-state">
                        ${sharedContactorState === 'mixed' ? '<option value="mixed" selected disabled>Mixte / Valeurs différentes</option>' : ''}
                        <option value="auto" ${sharedContactorState === 'auto' ? 'selected' : ''}>Automatique (Auto)</option>
                        <option value="1" ${sharedContactorState === '1' ? 'selected' : ''}>Marche Forcée (1)</option>
                        <option value="0" ${sharedContactorState === '0' ? 'selected' : ''}>Arrêt (0)</option>
                    </select>
                </div>
            `;
        } else if (sharedCategory === 'wattmetre') {
            html += `
                <div class="form-group">
                    <label>Consommation affichée (W)</label>
                    <input type="text" id="inspector-watt-value" value="${sharedWattValue}" placeholder="${isMixed('wattValue') ? 'Mixte / Valeurs différentes' : 'Ex: 2150 W'}">
                </div>
            `;
        }
    } else if (sharedCategory === 'mixed') {
        html += `
            <div style="font-size:0.75rem; color: var(--text-muted); background: rgba(255,255,255,0.02); border: 1px dashed var(--border-color); padding: 10px; border-radius: 6px; margin-bottom:15px; text-align:center;">
                ⚠️ Catégories mixtes sélectionnées.<br>Les réglages techniques avancés sont indisponibles.
            </div>
        `;
    }

    // Appearance & smart options
    const showAppearanceAndSmart = !selectedList.every(b => b.unused);

    if (showAppearanceAndSmart) {
        html += `
            <!-- Aesthetics / Appearance -->
            <div class="form-group" style="margin-top: 15px; border-top: 1px solid var(--border-color); padding-top: 15px;">
                <label>Couleur</label>
                <select id="inspector-color">
                    ${sharedColor === 'mixed' ? '<option value="mixed" selected disabled>Mixte / Valeurs différentes</option>' : ''}
                    <option value="none" ${sharedColor === 'none' ? 'selected' : ''}>Aucune</option>
                    <option value="blue" ${sharedColor === 'blue' ? 'selected' : ''}>Bleu</option>
                    <option value="green" ${sharedColor === 'green' ? 'selected' : ''}>Vert</option>
                    <option value="yellow" ${sharedColor === 'yellow' ? 'selected' : ''}>Jaune</option>
                    <option value="red" ${sharedColor === 'red' ? 'selected' : ''}>Rouge</option>
                    <option value="purple" ${sharedColor === 'purple' ? 'selected' : ''}>Violet</option>
                    <option value="orange" ${sharedColor === 'orange' ? 'selected' : ''}>Orange</option>
                    <option value="custom" ${sharedColor === 'custom' ? 'selected' : ''}>Teinte personnalisée...</option>
                </select>
            </div>
        `;

        if (sharedColor === 'custom') {
            html += `
                <div class="form-group" id="inspector-color-custom-block" style="padding-left: 10px; border-left: 2px solid var(--border-color);">
                    <label id="inspector-custom-hue-label">Teinte de la couleur (${isMixed('customHue') ? 'Mixte' : sharedCustomHue + '°'})</label>
                    <input type="range" id="inspector-custom-hue" class="rainbow-slider" min="0" max="360" value="${isMixed('customHue') ? 120 : sharedCustomHue}">
                    <div id="inspector-hue-preview-box" style="width: 100%; height: 8px; border-radius: 4px; margin-top: 8px; border: 1px solid rgba(255,255,255,0.2); background-color: ${isMixed('customHue') ? 'transparent' : `hsl(${sharedCustomHue}, 90%, 96%)`};"></div>
                </div>
            `;
        }

        // Smart Settings
        html += `
            <div class="form-group" style="margin-top: 15px; border-top: 1px solid var(--border-color); padding-top: 15px;">
                <label style="display: flex; align-items: center; gap: 8px; font-weight: normal; cursor: pointer; user-select: none;">
                    <input type="checkbox" id="inspector-connected" style="width: auto;" ${allConnected ? 'checked' : ''}>
                    <span>Module connecté / intelligent ${mixedConnected ? '<span style="font-size:0.65rem;color:var(--text-muted);">(Mixte)</span>' : ''}</span>
                </label>
            </div>
        `;

        if (allConnected) {
            html += `
                <div class="form-group" style="padding-left: 10px; border-left: 2px solid var(--border-color); margin-top: 5px;">
                    <label>Protocole réseau</label>
                    <select id="inspector-connected-type">
                        ${sharedConnectedType === 'mixed' ? '<option value="mixed" selected disabled>Mixte / Valeurs différentes</option>' : ''}
                        <option value="wifi" ${sharedConnectedType === 'wifi' ? 'selected' : ''}>Wi-Fi</option>
                        <option value="radio" ${sharedConnectedType === 'radio' ? 'selected' : ''}>Radio (Zigbee/Zwave)</option>
                        <option value="ir" ${sharedConnectedType === 'ir' ? 'selected' : ''}>Infrarouge</option>
                    </select>

                    ${sharedConnectedType === 'wifi' ? `
                        <label style="margin-top: 8px;">Adresse IP</label>
                        <input type="text" id="inspector-connected-ip" value="${sharedConnectedIp}" placeholder="${isMixed('connectedIp') ? 'Mixte / Valeurs différentes' : 'Ex: 192.168.1.50'}">
                    ` : ''}
                </div>
            `;
        }
    }

    html += `</div>`;
    container.innerHTML = html;

    // Auto-adapt description textarea height initially
    const initDesc = document.getElementById('inspector-description');
    if (initDesc) {
        initDesc.style.height = 'auto';
        initDesc.style.height = initDesc.scrollHeight + 'px';
    }

    // Apply checkbox indeterminate states for mixed selections
    const chkUnused = document.getElementById('inspector-unused');
    if (chkUnused && mixedUnused) chkUnused.indeterminate = true;

    const chkWired = document.getElementById('inspector-wired');
    if (chkWired && mixedWired) chkWired.indeterminate = true;

    const chkConnected = document.getElementById('inspector-connected');
    if (chkConnected && mixedConnected) chkConnected.indeterminate = true;

    // Attach listeners
    const elUnused = document.getElementById('inspector-unused');
    if (elUnused) elUnused.addEventListener('change', (e) => {
        const isChecked = e.target.checked;
        const wiredContainer = document.getElementById('inspector-wired-container');
        const chkWired = document.getElementById('inspector-wired');
        if (wiredContainer) {
            wiredContainer.style.display = isChecked ? 'flex' : 'none';
            elUnused.parentElement.style.marginBottom = isChecked ? '8px' : '0';
        }
        if (!isChecked && chkWired) {
            chkWired.checked = true;
        }
        setGroupProperty('unused', isChecked);
    });

    const elWired = document.getElementById('inspector-wired');
    if (elWired) elWired.addEventListener('change', (e) => {
        setGroupProperty('wired', e.target.checked);
    });

    const elCategory = document.getElementById('inspector-category');
    if (elCategory) elCategory.addEventListener('change', (e) => {
        setGroupProperty('category', e.target.value);
    });

    const elDescription = document.getElementById('inspector-description');
    if (elDescription) {
        elDescription.addEventListener('input', (e) => {
            // Auto-adapt height on type
            e.target.style.height = 'auto';
            e.target.style.height = e.target.scrollHeight + 'px';

            selectedList.forEach(b => {
                b.description = e.target.value;
                const descPreviewEl = document.querySelector(`.module-device[data-breaker-id="${b.id}"] .device-description`);
                if (descPreviewEl) {
                    if (b.category === 'differentiel') {
                        descPreviewEl.innerHTML = `Type ${b.type || 'AC'}`;
                    } else {
                        descPreviewEl.innerHTML = formatDescriptionHtml(e.target.value);
                    }
                    adjustDescriptionFontSizes();
                    descPreviewEl.title = e.target.value || '';
                }
                const outlineDescEl = document.querySelector(`.module-outline-item[data-breaker-id="${b.id}"] .outline-desc`);
                if (outlineDescEl) {
                    outlineDescEl.innerText = e.target.value ? `- ${e.target.value}` : '';
                }
            });
        });
        elDescription.addEventListener('change', () => {
            window.saveState();
        });
    }

    const elCustomBrand = document.getElementById('inspector-custom-brand');
    if (elCustomBrand) {
        elCustomBrand.addEventListener('input', (e) => {
            selectedList.forEach(b => {
                b.customBrand = e.target.value;
                const brandPreviewEl = document.querySelector(`.module-device[data-breaker-id="${b.id}"] .device-brand`);
                if (brandPreviewEl) {
                    brandPreviewEl.innerText = e.target.value || getCategoryLabel(b.category);
                }
            });
            adjustDescriptionFontSizes();
        });
        elCustomBrand.addEventListener('change', () => {
            window.saveState();
            renderConfigurator(); // Update left sidebar listing brand text
        });
    }

    const elComment = document.getElementById('inspector-comment');
    if (elComment) {
        elComment.style.height = 'auto';
        elComment.style.height = elComment.scrollHeight + 'px';

        elComment.addEventListener('input', (e) => {
            e.target.style.height = 'auto';
            e.target.style.height = e.target.scrollHeight + 'px';

            selectedList.forEach(b => {
                b.comment = e.target.value;
            });
            renderCommentsPreview();
            renderPreview();
        });
        elComment.addEventListener('change', () => {
            window.saveState();
        });
    }

    const elWidth = document.getElementById('inspector-width');
    if (elWidth) elWidth.addEventListener('change', (e) => {
        setGroupProperty('width', parseInt(e.target.value));
    });

    const elRating = document.getElementById('inspector-rating');
    const elRatingCustom = document.getElementById('inspector-rating-custom');
    if (elRating) elRating.addEventListener('change', (e) => {
        if (e.target.value === 'custom') {
            if (elRatingCustom) {
                elRatingCustom.style.display = 'block';
                elRatingCustom.value = '';
                elRatingCustom.focus();
            }
        } else {
            if (elRatingCustom) elRatingCustom.style.display = 'none';
            setGroupProperty('rating', e.target.value);
        }
    });

    if (elRatingCustom) {
        elRatingCustom.addEventListener('input', (e) => {
            selectedList.forEach(b => {
                b.rating = e.target.value;
                const ratingPreviewEl = document.querySelector(`.module-device[data-breaker-id="${b.id}"] .device-rating`);
                if (ratingPreviewEl) {
                    ratingPreviewEl.innerText = e.target.value || '';
                }
            });
        });
        elRatingCustom.addEventListener('change', (e) => {
            setGroupProperty('rating', e.target.value);
        });
    }

    const elRatingMa = document.getElementById('inspector-rating-ma');
    if (elRatingMa) elRatingMa.addEventListener('change', (e) => {
        setGroupProperty('ratingMa', e.target.value);
    });

    const elType = document.getElementById('inspector-type');
    if (elType) elType.addEventListener('change', (e) => {
        selectedList.forEach(b => {
            b.type = e.target.value;
            if (e.target.value === 'custom' && b.customIconType === 'none') {
                b.customIconType = 'emoji';
            }
        });
        window.saveState();
        renderAll();
    });

    const elCustomIconType = document.getElementById('inspector-custom-icon-type');
    if (elCustomIconType) elCustomIconType.addEventListener('change', (e) => {
        setGroupProperty('customIconType', e.target.value);
    });

    const elCustomIconFile = document.getElementById('inspector-custom-icon-file');
    if (elCustomIconFile) elCustomIconFile.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(evt) {
                setGroupProperty('customIconValue', evt.target.result);
            };
            reader.readAsDataURL(file);
        }
    });

    const elCustomIconEmoji = document.getElementById('inspector-custom-icon-emoji');
    if (elCustomIconEmoji) {
        elCustomIconEmoji.addEventListener('input', (e) => {
            selectedList.forEach(b => {
                b.customIconValue = e.target.value;
                const iconPreviewEl = document.querySelector(`.module-device[data-breaker-id="${b.id}"] .device-type-icon span.emoji-icon`);
                if (iconPreviewEl) {
                    iconPreviewEl.innerText = e.target.value || '⚙️';
                }
            });
        });
        elCustomIconEmoji.addEventListener('change', () => {
            window.saveState();
        });
    }

    const elCustomIconUrl = document.getElementById('inspector-custom-icon-url');
    if (elCustomIconUrl) {
        elCustomIconUrl.addEventListener('input', (e) => {
            selectedList.forEach(b => {
                b.customIconValue = e.target.value;
                const iconPreviewEl = document.querySelector(`.module-device[data-breaker-id="${b.id}"] .device-type-icon img`);
                if (iconPreviewEl) {
                    iconPreviewEl.src = e.target.value;
                }
            });
        });
        elCustomIconUrl.addEventListener('change', () => {
            window.saveState();
            renderAll();
        });
    }

    const elContactorState = document.getElementById('inspector-contactor-state');
    if (elContactorState) elContactorState.addEventListener('change', (e) => {
        selectedList.forEach(b => {
            b.contactorState = e.target.value;
            b.on = (e.target.value === '1' || e.target.value === 'auto');
        });
        window.saveState();
        renderAll();
    });

    const elWattValue = document.getElementById('inspector-watt-value');
    if (elWattValue) {
        elWattValue.addEventListener('input', (e) => {
            selectedList.forEach(b => {
                b.wattValue = e.target.value;
                const wattPreviewEl = document.querySelector(`.module-device[data-breaker-id="${b.id}"] .device-wattmeter-screen`);
                if (wattPreviewEl) {
                    wattPreviewEl.innerText = e.target.value || '';
                }
            });
        });
        elWattValue.addEventListener('change', () => {
            window.saveState();
        });
    }

    const elColor = document.getElementById('inspector-color');
    if (elColor) elColor.addEventListener('change', (e) => {
        setGroupProperty('color', e.target.value);
    });

    const elCustomHue = document.getElementById('inspector-custom-hue');
    if (elCustomHue) {
        elCustomHue.addEventListener('input', (e) => {
            const h = parseInt(e.target.value);
            selectedList.forEach(b => {
                b.customHue = h;
                const breakerPreviewEl = document.querySelector(`.module-device[data-breaker-id="${b.id}"]`);
                if (breakerPreviewEl) {
                    breakerPreviewEl.style.cssText = `background-color: hsl(${h}, 90%, 96%) !important; border-color: hsl(${h}, 75%, 80%) !important;`;
                }
            });
            const label = document.getElementById('inspector-custom-hue-label');
            if (label) label.innerText = `Teinte de la couleur (${h}°)`;
            const previewBox = document.getElementById('inspector-hue-preview-box');
            if (previewBox) previewBox.style.backgroundColor = `hsl(${h}, 90%, 96%)`;
        });
        elCustomHue.addEventListener('change', () => {
            window.saveState();
            renderAll();
        });
    }

    const elConnected = document.getElementById('inspector-connected');
    if (elConnected) elConnected.addEventListener('change', (e) => {
        setGroupProperty('connected', e.target.checked);
    });

    const elConnectedType = document.getElementById('inspector-connected-type');
    if (elConnectedType) elConnectedType.addEventListener('change', (e) => {
        setGroupProperty('connectedType', e.target.value);
    });

    const elConnectedIp = document.getElementById('inspector-connected-ip');
    if (elConnectedIp) {
        elConnectedIp.addEventListener('input', (e) => {
            selectedList.forEach(b => {
                b.connectedIp = e.target.value;
                const ipPreviewEl = document.querySelector(`.module-device[data-breaker-id="${b.id}"] .device-ip`);
                if (ipPreviewEl) {
                    ipPreviewEl.innerText = e.target.value || '';
                }
            });
        });
        elConnectedIp.addEventListener('change', () => {
            window.saveState();
            renderAll();
        });
    }
};
