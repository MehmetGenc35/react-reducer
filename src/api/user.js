const API_URL = "https://carrental-v3-backend.herokuapp.com"

export const login = async(payload) => {
    
    const res= await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    const data = await res.json();
    if(!res.ok) throw new Error(data.message)
    
    return data;
}

export const getUser = async() => {
    const token = localStorage.getItem("token");//storage e kaydettiğimz token ı çektik
    const res= await fetch(`${API_URL}/user`, {
        headers: { "Authorization": `Bearer ${token}` }
    })
    const data = await res.json();
    if(!res.ok) throw new Error(data.message)
    
    return data;
}

//bazı endpointler parametrelerini açıktan almazlar
//önce login olup öyle müracat edilemsi gereken endpointler
//bu bilgi(token) headers vasıtasıyla gidecek çünkü talepten önce header a bakıyor
