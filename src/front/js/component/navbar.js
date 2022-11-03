import React, {useState} from "react";
import { gsap } from "gsap";

import Logo from "../../img/a1k-entero.png";
import logo from "../../img/a1k-entero.png";

const { useRef, useEffect, createRef } = React

const items = [
    {
      name: "Home",
      color: "#e91e63",
      href: "/"
    },
    {
      name: "Streamings",
      color: "#e91e63",
      href: "#"
    },
    {
      name: "Entrevistas",
      color: "#e91e63",
      href: "/entrevistas"
    },
    {
      name: "Sobre mi",
      color: "#e91e63",
      href: "#"
    },
    {
      name: "Perfil",
      color: "#e91e63",
      href: "https://3000-4geeksacade-reactflaskh-ghmkwgehanx.ws-eu73.gitpod.io/user-profile"
    }
  ];

export const Navbar = () => {
        const $root = useRef()
        const $indicator1 = useRef()
        const $indicator2 = useRef()
        const $items = useRef(items.map(createRef))
        const [ active, setActive ] = useState(0)
        
        const animate = () => {
          const menuOffset = $root.current.getBoundingClientRect()
          const activeItem = $items.current[active].current
          const { width, height, top, left } = activeItem.getBoundingClientRect()
          
          const settings = {
            x: left - menuOffset.x,
            y: top - menuOffset.y,
            width: width,
            height: height,
            backgroundColor: items[active].color,
            ease: 'elastic.out(.7, .7)',
            duration: .8
          }
          
          gsap.to($indicator1.current, {
            ...settings,
          })
          
          gsap.to($indicator2.current, {
            ...settings,
            duration: 1
          })
        }
        
        useEffect(() => {
          animate()
          window.addEventListener('resize', animate)
          
          return (() => {
            window.removeEventListener('resize', animate)
          })    
        }, [active])
        
        return (
          <div
            ref={$root}
            className="menu"
          >
          <a class="navbar-brand" href="#" img src ="/workspace/project-4geeks/src/front/img/a1k-entero.png"></a>

        
            {items.map((item, index) => (
              <a
                key={item.name}
                ref={$items.current[index]}
                className={`item ${active === index ? 'active' : ''}`}
                onMouseEnter={() => {
                  setActive(index)
                }}
                href={item.href}
               >
                {item.name}
              </a>
            ))}
            <div
              ref={$indicator1}
              className="indicator"
             />
            <div
              ref={$indicator2}
              className="indicator"
             />
          </div>
        )
      }
    
