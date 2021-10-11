import React from 'react'

function Header(props){
    return(
        //console.warn("Header: ", props.data)
        <div className="add-to-cart">
            <span className="cart-count">{props.data.length}</span>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAolBMVEX///85ODkAquMzMjMApOH6+vrK7/prams2NTZOTU4Ap+Lf3990c3TOzs4lJCXc8PkAr+WN2PIsKyyioqLV8/u6ubqs3vQiICLp6enw8PCLi4tVVVXi4uIrKis/Pj90dHRHRkfn9vxVU1WTkpNsbGybm5thYGEYFhiFhIXW1tYAAADExMRKSUqvr699fH0cGxwpt+e75vdKwetxze+e2vN1z+9NasjyAAAD4klEQVR4nO3c61LiQBCG4cQhEgKiJiIEOYpEXE+I7P3f2gZxTfA4k2mmu6zv+b3VNW/lQLJJ9DwAAAAAAABgEPR6g2Y1g0Ev5V7+j246/YtJ2K0mHl2Ok6OAu+E76ayh4jD0qwpDFU9aR9wZXwrmw7h63VulemwNuFM+1+u3rfO24uyWO+Yz6ZUiCvR9NZK4p2YxWWCeOJGXOKfaRV8Tsx530TtHI/tzzI64z520Kx1T7qMvrmWdUI/IA3214I7asaA7j/4XXog6EndPMyquaOdYDjvcVSU33fLKRuOkmvyarzQnnnNnlXSGpcBJp+q1c9C7LCWqhaBr8KR0ookTi0GD0o+Oqgu6lZqVCts2VyNpVmxEUaeafqmw27QYlLZ+feEVCpmgUBsK2aBQGwrZoFAbCtksrouHD39uLAalWTHpcSKosFd+gmR1V1eeNBB0fwgAAAAADqWD22T20DJXL+4ngvFdg9HFuJ80v3oa0Lt/8NvDWFXwWPxPflBXIScVD1U2//T+pnOhVNVn8e2dwopD6KhhY/ZhOzazrsXKhBXmd8/x9buXjm4aVg/ixRXmjX4S7ATaLUtgoR+Gs1LgneWqJBb6/uP926Iy20XJLAzfXh27t35hS2ahr1rbM2qzYf3CltBCv73dTxP7JUktDEebJaXWR6HcQr+7WVhz+PM//InYwpc3HBOCl+7EFqosP9c8EKxIbGF4mV+DZwSvvsot3Pwk3hEMElvoj/ILcIo5cgs3r3BSzEEhHxTqQiEfFOpCIR8U6kIhHxTqQiEfFOpCIR8U6kIhHxTqQiEfFOpCIR8U6kIhHxTqQiEfFOpCIR8U6kIhHxTqQiEfFOpCIR8U6kIhHxTqQiGfTWGVr2K//Uq20ne2+xLnhRU+bP74pXPx3W3Qr4uyh79fH8hCHwgAAAAiHcpSXIRMTymceV5NluO3wuODWmTv3PMORIlKhScUA1HoHAqNodA5FBpDoXMoNIZC51BoDIXOodAYCp1DoTEUOodCYyh0DoXGUOgcCo2h0DkUGkOhcyg0hkLnUGgMhc6h0BgKnUOhMRQ6h0JjKHQOhcZQ6Nw+CknmkNlH4ZJiDhnqwpMnz1tFBIPIkBceet7zry5c5vOeagSDyBAXRqt80FTUgUhcWMtPNF4gajel3obTzaQnSb8XtIXR83aUpI1IW7icvo4iWBkV2sL1/1lrORuRsjBaFZ/6rUlWR4GwMFp6hUDMVqQrjFbHXtk6ktFIVlhbTb1dZ6sDCY1UhctT76PzvJE9kqIwipbr9xtwa3p8ujwQ9R1wFdHJ38PP+8QJzqrgXjUAAAAAAAAAl3/CFDDyscYorgAAAABJRU5ErkJggg==" />
        </div>
    )
}

export default Header;