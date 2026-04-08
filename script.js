// ignore this is something a vscode plugin generated
/* BLUEPRINT-JS-START */
// 🚀 Auto-generado para c: 4/8/2026, 12:52:07 PM

'use strict';

console.log('✅ 30 funciones y 0 clases detectadas');

// Funciones interactivas
function demo_lstop() {
    console.log('▶️ Ejecutando: lstop()');
    alert('Función lstop() ejecutada');
}

function demo_laction() {
    console.log('▶️ Ejecutando: laction()');
    alert('Función laction() ejecutada');
}

function demo_print_usage() {
    console.log('▶️ Ejecutando: print_usage()');
    alert('Función print_usage() ejecutada');
}

function demo_l_message() {
    console.log('▶️ Ejecutando: l_message()');
    alert('Función l_message() ejecutada');
}

function demo_report() {
    console.log('▶️ Ejecutando: report()');
    alert('Función report() ejecutada');
}

function demo_msghandler() {
    console.log('▶️ Ejecutando: msghandler()');
    alert('Función msghandler() ejecutada');
}

function demo_docall() {
    console.log('▶️ Ejecutando: docall()');
    alert('Función docall() ejecutada');
}

function demo_print_version() {
    console.log('▶️ Ejecutando: print_version()');
    alert('Función print_version() ejecutada');
}

function demo_createargtable() {
    console.log('▶️ Ejecutando: createargtable()');
    alert('Función createargtable() ejecutada');
}

function demo_dochunk() {
    console.log('▶️ Ejecutando: dochunk()');
    alert('Función dochunk() ejecutada');
}

function demo_dofile() {
    console.log('▶️ Ejecutando: dofile()');
    alert('Función dofile() ejecutada');
}

function demo_dostring() {
    console.log('▶️ Ejecutando: dostring()');
    alert('Función dostring() ejecutada');
}

function demo_dolibrary() {
    console.log('▶️ Ejecutando: dolibrary()');
    alert('Función dolibrary() ejecutada');
}

function demo_pushargs() {
    console.log('▶️ Ejecutando: pushargs()');
    alert('Función pushargs() ejecutada');
}

function demo_handle_script() {
    console.log('▶️ Ejecutando: handle_script()');
    alert('Función handle_script() ejecutada');
}

function demo_collectargs() {
    console.log('▶️ Ejecutando: collectargs()');
    alert('Función collectargs() ejecutada');
}

function demo_runargs() {
    console.log('▶️ Ejecutando: runargs()');
    alert('Función runargs() ejecutada');
}

function demo_handle_luainit() {
    console.log('▶️ Ejecutando: handle_luainit()');
    alert('Función handle_luainit() ejecutada');
}

function demo_lua_saveline() {
    console.log('▶️ Ejecutando: lua_saveline()');
    alert('Función lua_saveline() ejecutada');
}

function demo_lua_freeline() {
    console.log('▶️ Ejecutando: lua_freeline()');
    alert('Función lua_freeline() ejecutada');
}

function demo_lua_initreadline() {
    console.log('▶️ Ejecutando: lua_initreadline()');
    alert('Función lua_initreadline() ejecutada');
}

function demo_incomplete() {
    console.log('▶️ Ejecutando: incomplete()');
    alert('Función incomplete() ejecutada');
}

function demo_pushline() {
    console.log('▶️ Ejecutando: pushline()');
    alert('Función pushline() ejecutada');
}

function demo_addreturn() {
    console.log('▶️ Ejecutando: addreturn()');
    alert('Función addreturn() ejecutada');
}

function demo_checklocal() {
    console.log('▶️ Ejecutando: checklocal()');
    alert('Función checklocal() ejecutada');
}

function demo_multiline() {
    console.log('▶️ Ejecutando: multiline()');
    alert('Función multiline() ejecutada');
}

function demo_loadline() {
    console.log('▶️ Ejecutando: loadline()');
    alert('Función loadline() ejecutada');
}

function demo_l_print() {
    console.log('▶️ Ejecutando: l_print()');
    alert('Función l_print() ejecutada');
}

function demo_doREPL() {
    console.log('▶️ Ejecutando: doREPL()');
    alert('Función doREPL() ejecutada');
}

function demo_pmain() {
    console.log('▶️ Ejecutando: pmain()');
    alert('Función pmain() ejecutada');
}


// 🛒 Lógica de Tienda Automática con MockServer
function addToCart(product, price) {
    const item = { 
        product, 
        price, 
        date: new Date().toLocaleString() 
    };
    
    if (window.MockServer) {
        MockServer.save('orders', item);
        console.log('📦 Pedido guardado:', item);
        
        // Disparar evento para actualizar historial
        window.dispatchEvent(new CustomEvent('orderUpdated'));
    } else {
        alert('¡' + product + ' añadido al carrito!');
    }
    updateCartUI();
}

function updateCartUI() {
    const badge = document.getElementById('cart-badge');
    if (badge && window.MockServer) {
        badge.innerText = MockServer.get('orders').length;
    }
}

console.log('🛍️ Sistema de Tienda Pro con Persistencia listo.');

// 📜 Sistema de Historial de Pedidos Automático
window.StoreHistory = {
    init() {
        console.log('📜 Historial de Tienda Activado');
        this.render();
        
        // Escuchar actualizaciones de pedidos
        window.addEventListener('orderUpdated', () => this.render());
        
        // También refrescar periódicamente o si cambia localStorage
        window.addEventListener('storage', () => this.render());
    },
    
    render() {
        const historyList = document.getElementById('order-history-list');
        if (!historyList || !window.MockServer) return;
        
        const orders = MockServer.get('orders').reverse(); // Ver los más nuevos primero
        
        if (orders.length === 0) {
            historyList.innerHTML = '<p style="color: #666; font-style: italic;">No hay pedidos registrados aún.</p>';
            return;
        }
        
        let html = '<table class="history-table">';
        html += '<thead><tr><th>Fecha</th><th>Producto</th><th>Precio</th><th>Acción</th></tr></thead>';
        html += '<tbody>';
        
        orders.forEach(order => {
            html += '<tr>';
            html += '<td>' + order.date + '</td>';
            html += '<td style="font-weight: bold;">' + order.product + '</td>';
            html += '<td style="color: #10b981; font-weight: bold;">' + order.price + '</td>';
            html += '<td><button class="btn-delete-sm" onclick="MockServer.delete(\'orders\', \'' + order.id_uuid + '\'); window.dispatchEvent(new CustomEvent(\'orderUpdated\'));">🗑️</button></td>';
            html += '</tr>';
        });
        
        html += '</tbody></table>';
        historyList.innerHTML = html;
        console.log('✅ Historial renderizado:', orders.length, 'pedidos');
    }
};

document.addEventListener('DOMContentLoaded', () => StoreHistory.init());

// 🧬 Servidor Universal de Datos (Multi-Use)
window.MockServer = {
    save(collection, data) {
        const items = JSON.parse(localStorage.getItem(collection) || '[]');
        items.push({ ...data, id_uuid: Math.random().toString(36).substr(2, 9) });
        localStorage.setItem(collection, JSON.stringify(items));
        console.log('📁 Guardado en ['+collection+']:', data);
        if (window.AdminConsole) AdminConsole.refresh();
    },
    get(collection) {
        return JSON.parse(localStorage.getItem(collection) || '[]');
    },
    delete(collection, id) {
        const items = this.get(collection).filter(i => i.id_uuid !== id);
        localStorage.setItem(collection, JSON.stringify(items));
        if (window.AdminConsole) AdminConsole.refresh();
    },
    clear(collection) {
        localStorage.removeItem(collection);
        if (window.AdminConsole) AdminConsole.refresh();
    }
};

// 🛠️ Consola de Administración Visual
window.AdminConsole = {
    isOpen: false,
    init() {
        const btn = document.createElement('div');
        btn.id = 'admin-btn'; btn.innerHTML = '🛠️';
        btn.onclick = () => this.toggle();
        document.body.appendChild(btn);

        const panel = document.createElement('div');
        panel.id = 'admin-panel';
        panel.innerHTML = '<h3>🛠️ Admin Console</h3><div id="admin-content"></div><button onclick="AdminConsole.toggle()">Cerrar</button>';
        document.body.appendChild(panel);
        this.refresh();
    },
    toggle() { 
        this.isOpen = !this.isOpen;
        document.getElementById('admin-panel').style.display = this.isOpen ? 'block' : 'none';
    },
    refresh() {
        const content = document.getElementById('admin-content');
        if (!content) return;
        let html = '';
        const collections = ['orders', 'highscores', 'logs', 'users'];
        collections.forEach(c => {
            const data = MockServer.get(c);
            if (data.length > 0) {
                html += '<h4>'+c.toUpperCase()+' ('+data.length+')</h4><table>';
                data.slice(-5).forEach(i => {
                    html += '<tr><td>'+JSON.stringify(i).substr(0,40)+'...</td><td><button onclick="MockServer.delete(\''+c+'\', \''+i.id_uuid+'\')">🗑️</button></td></tr>';
                });
                html += '</table>';
            }
        });
        content.innerHTML = html || '<p>Esperando datos...</p>';
    }
};
document.addEventListener('DOMContentLoaded', () => AdminConsole.init());

/* BLUEPRINT-JS-END */
