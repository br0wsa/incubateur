async function a(t){if(!t||typeof t!="string")throw new Error("URL invalide");try{const r=await fetch(t);if(!r.ok)throw new Error(`Erreur ${r.status}`);return await r.json()}catch(r){throw console.error(r),r}}export{a as f};
