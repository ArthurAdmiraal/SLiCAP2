"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[36],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?i.createElement(h,r(r({ref:n},p),{},{components:t})):i.createElement(h,r({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<a;l++)r[l]=t[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7888:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var i=t(7462),o=t(3366),a=(t(7294),t(3905)),r=["components"],s={sidebar_position:5,title:"Advanced use"},c=void 0,l={unversionedId:"schematics/advanced",id:"schematics/advanced",isDocsHomePage:!1,title:"Advanced use",description:"Text-based schematic editing",source:"@site/docs/schematics/advanced.mdx",sourceDirName:"schematics",slug:"/schematics/advanced",permalink:"/SLiCAP2/next/schematics/advanced",editUrl:"https://github.com/slicap/slicap/edit/main/website/docs/schematics/advanced.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Advanced use"},sidebar:"docSidebar",previous:{title:"Working with parameters",permalink:"/SLiCAP2/next/schematics/parameters"},next:{title:"Structure",permalink:"/SLiCAP2/next/analyses/structure"}},p=[{value:"Text-based schematic editing",id:"text-based-schematic-editing",children:[{value:"Components",id:"components",children:[]},{value:"Simple series-parallel circuits",id:"simple-series-parallel-circuits",children:[]},{value:"Defining nodes",id:"defining-nodes",children:[]},{value:"Connecting terminals",id:"connecting-terminals",children:[]},{value:"Coupling of component variables to circuits",id:"coupling-of-component-variables-to-circuits",children:[]},{value:"Removing components",id:"removing-components",children:[]},{value:"Combining subcircuits",id:"combining-subcircuits",children:[]}]}],u={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"text-based-schematic-editing"},"Text-based schematic editing"),(0,a.kt)("p",null,"SLiCAP defines a circuit algebra that can be used for code-based manipulation of schematics. This is useful for automation, such as testbenches or group modifications."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Once you give up on a visual schematic, it is easy to get lost in the code. Only use this functionality if you know what you are doing!"))),(0,a.kt)("h3",{id:"components"},"Components"),(0,a.kt)("p",null,"Circuits consist of components. Components are created by calling their respective class constructors, like all python objects."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"resistor  = Resistor('R1')\ncapacitor = Capacitor('C1')\ndiode     = Diode('D1')\nmosfet    = NMOS('Q1')\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Check the ",(0,a.kt)("a",{parentName:"p",href:"/api/components"},"Components")," API Reference documentation for an exhaustive list of components."))),(0,a.kt)("h3",{id:"simple-series-parallel-circuits"},"Simple series-parallel circuits"),(0,a.kt)("p",null,"The most common need for text-based schematic creation is in building simple series-parallel networks for compensation. You use the ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," operator to make series connections."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"resistor          = Resistor('R1')\ncapacitor         = Capacitor('C1')\nseries_rc_circuit = resistor + capacitor\n")),(0,a.kt)("p",null,"Note that there is no need for an intermediate variable, the components can be defined directly in the series addition."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"series_rc_circuit = Resistor('R1') + Capacitor('C1')\n")),(0,a.kt)("p",null,"You use the ",(0,a.kt)("inlineCode",{parentName:"p"},"|")," operator to make parallel connections."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"parallel_rc_circuit = Resistor('R1') | Capacitor('C1')\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"|")," parameters can be combined to make more complex circuits. Brackets are used to denote the order of operations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"compensation_circuit = Resistor('R2') + (Resistor('R1') | Capacitor('C1'))\n")),(0,a.kt)("h3",{id:"defining-nodes"},"Defining nodes"),(0,a.kt)("p",null,"Building series-parallel circuits has its uses, but is limited. What if you need to define an output node, for example in an RC filter? That can be done through adding named nodes. Nodes are defined through their class constructor, just like components."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'node_out = Node("Out")\n')),(0,a.kt)("p",null,"A named node can then be added using a ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," operator."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"node_out = Node(\"Out\")\nrc_filter = Resistor('R1') + node_out + Capacitor('C1')\n")),(0,a.kt)("p",null,"As with components, no intermediate variables are required."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"rc_filter = Node(\"In\") + Resistor('R1') + Node(\"Out\") + Capacitor('C1')\n")),(0,a.kt)("p",null,"Ground connections can be defined in a similar way."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"rc_filter = Node(\"In\") + Resistor('R1') + Node(\"Out\") + Capacitor('C1') + Ground()\n")),(0,a.kt)("h3",{id:"connecting-terminals"},"Connecting terminals"),(0,a.kt)("p",null,"Not all circuits can be represented as series-parallel circuits. For example, a wye circuit cannot. For such cases, the terminal connection syntax can be used. In fact, this is the most versatile connection method. For complicated circuits, it is the method you use most often."),(0,a.kt)("p",null,"Terminals are connected using the ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," series connection operator."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"R1 = Resistor('R1')\nR2 = Resistor('R2')\nR3 = Resistor('R3')\n\nwye_circuit = R1.neg + R2.neg + R3.neg\n")),(0,a.kt)("p",null,"As with series connections, named nodes can be added."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"R1 = Resistor('R1')\nR2 = Resistor('R2')\nR3 = Resistor('R3')\n\nwye_circuit  = R1.neg + R2.neg + R3.neg + Node('Center')\n")),(0,a.kt)("p",null,"Component and terminal indexing is used to add more connections."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"wye_circuit = wye_circuit.R1.pos + Node('In1')\nwye_circuit = wye_circuit.R2.pos + Node('In2')\nwye_circuit = wye_circuit.R2.pos + Node('In3')\n")),(0,a.kt)("p",null,"Intermediate variables are not necessary. The same can be stated in a one-liner."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"wye_circuit = (((R1.neg + R2.neg + R3.neg + Node('Center')).R1.pos + Node('In1')).R2.pos + Node('In2')).R2.pos + Node('In3')\n")),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Even for this simple circuit, cascading connections on a single line quickly gets unreadable. Often, it is better to separate your connections over multiple lines. One case where single line connections by terminal may be useful is in explicitly specifing the direction of directed bipoles, such as diodes."),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"clamp_circuit = (Node('In') + Resistor('R1') + Node('Out') + Zener('D1').K).D1.A + Ground()\n")))),(0,a.kt)("p",null,"The terminal connection syntax can also be used to merge named nodes. The name of the node on the left of the ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," operator is the name of the new node."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"source = Node(\"Out-\") + VoltageSource('Vs') + Resistor(\"Rs\") + Node(\"Out+\")\nload   = Node(\"In+\") + Resistor('Rl') + Node(\"In-\")\n\ncircuit = source.nodes['Out+'] + load.nodes['In+']\ncircuit = circuit.nodes['Out-'] + circuit.nodes['In-']\n# the only named nodes in the finished circuit are 'Out+' and 'Out-'\n")),(0,a.kt)("h4",{id:"combination-with-series-connections"},"Combination with series connections"),(0,a.kt)("p",null,"Terminal connections can be combined with series connections. In fact, we have already used the terminal connection syntax to add nodes within series connections! When the ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," operator is used with only monopoles, a terminal connection is made. When it is used with at least one multi-pole circuit or component, a series connection is made. Let's look at an example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# every term is a monopole - all of the terminals are connected in a single node\nwye_circuit    = Resistor('R1').neg + Resistor('R2').neg + Resistor('R3').neg\n# the middle term is a bipole - the terminals are connected on either side\nseries_circuit = Resistor('R1').neg + Resistor('R2') + Resistor('R3').neg\n")),(0,a.kt)("p",null,"This is useful when adding networks around multipole components, such as an opamp."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"amplifier = Opamp('U1').out + (Resistor('R1') | Capacitor('C1')) + Node('FB') + Resistor('R2')\namplifier = amplifier.nodes.FB + amplifier.U1.in_n\n")),(0,a.kt)("h4",{id:"combination-with-parallel-connections"},"Combination with parallel connections"),(0,a.kt)("p",null,"Parallel connections can also be combined with terminal connections, but are more tricky to work with. When series and terminal connections are made, the leftmost and rightmost node are tracked. The ",(0,a.kt)("inlineCode",{parentName:"p"},"|")," paralell connection operator then connects these nodes. This gives the expected behaviour for series-parallel RLC circuits."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"circuit = (Resistor('R1') + Inductor('L1') + Capacitor('C1')) | (Resistor('R2') + Capacitor('C2'))\n")),(0,a.kt)("p",null,"The behaviour is more involved once multipole components are added to the circuit."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"circuit = ((Resistor('R1') + NMOS('Q1').gate).Q1.drain + Resistor('R2')) | Resistor('R3')\n# results in a circuit where R1 is connected to the NMOS gate, R3 is connected to R1,\n# and R2 connects the other side of R3 to the NMOS drain\n")),(0,a.kt)("h3",{id:"coupling-of-component-variables-to-circuits"},"Coupling of component variables to circuits"),(0,a.kt)("p",null,"A component variable can be used to change its parameters in the circuit to which it is coupled. Most operators don't preserve this coupling though."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"R1       = Resistor('R1')\nR1.value = 10\ncircuit  = Ground() + VoltageSource('V1') + R1 + Ground()\nR1.value = 20\nprint(circuit.R1.value) # returns 10 ohm\n")),(0,a.kt)("p",null,"Without ",(0,a.kt)("a",{parentName:"p",href:"#preserving-component-variable-couplings-with-the-union-operator"},"taking special care"),", all connection operators break the link between the component variable and the circuit. Hence, parameters need to be adjusted using indexing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"circuit.R1.value = 30\nprint(circuit.R1.value) # returns 30 ohm\n")),(0,a.kt)("p",null,"It is possible to create a new component variable that is linked to the circuit."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"R1 = circuit.R1\nR1.value = 40\nprint(circuit.R1.value) # returns 40 ohm\n")),(0,a.kt)("h4",{id:"preserving-component-variable-couplings-with-the-union-operator"},"Preserving component variable couplings with the union operator"),(0,a.kt)("p",null,"The reason operators break coupling by default is that operators on circuits create new instances for all of the components in the circuit. This is useful because it prevents changing a component's parameters in one circuit from effecting another. However, there ",(0,a.kt)("inlineCode",{parentName:"p"},"&")," union operator can be used to work around this if you have only one instance of a circuit."),(0,a.kt)("p",null,"Instead of copying all of the components, the ",(0,a.kt)("inlineCode",{parentName:"p"},"&")," union operator combines all of the components, connections, and nodes in its operands. If two components or nodes have the same name, those from the older circuit are kept."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"R1       = Resistor('R1')\nR1.value = 10\ncircuit  = R1\ncircuit &= Ground() + VoltageSource('V1') + R1 + Ground()\nR1.value = 20\nprint(circuit.R1.value) # returns 20 ohm\n")),(0,a.kt)("p",null,"This is useful for digital-like circuits where components have so many connections that using indexing is cumbersome."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"entity1 = Entity('E1')\nentity2 = Entity('E2')\n\ncircuit  = entity1 & entity2\ncircuit &= entity1.In0 + entity2.Out0\ncircuit &= entity1.In1 + entity2.Out1\ncircuit &= entity1.In2 + entity2.Out2\ncircuit &= entity1.In3 + entity2.Out3\n")),(0,a.kt)("h3",{id:"removing-components"},"Removing components"),(0,a.kt)("p",null,"So far, we have discussed how to add to circuits. But sometimes, you need to remove connections to make space for something new. For example, if you want to replace a voltage divider by a transactor, you remove it."),(0,a.kt)("p",null,"Both components and nodes have a ",(0,a.kt)("inlineCode",{parentName:"p"},"remove()")," method to remove it from the circuit, along with its connections."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"V1 = VoltageSource('V1')\nR1 = Resistor('R1')\nR2 = Resistor('R2')\ncircuit = Ground() + V1 + R1 + Node(\"Out\") + R2 + Ground()\ncircuit.R2.remove() # circuit now only has V1, node out and R1\ncircuit.nodes.Out.remove() # circuit now only has V1 and R1\n")),(0,a.kt)("p",null,"It is also possible to remove a list of objects directly from the circuit."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"circuit.remove([circuit.nodes.Out, circuit.R2]) # circuit now only has V1 and R1\n")),(0,a.kt)("p",null,"Terminals cannot be removed on their own, as it would alter the component. Instead, they can be disconnected from a node by the ",(0,a.kt)("inlineCode",{parentName:"p"},"disconnect")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"V1 = VoltageSource('V1')\nR1 = Resistor('R1')\nR2 = Resistor('R2')\ncircuit = ()(Ground() + V1 + R1.pos).R1.neg + R2.pos).R2.neg + Ground()\ncircuit.R2.pos.disconnect() # circuit still has all components, but R2 is no longer connected to R1\ncircuit.R1.pos.disconnect() # circuit still has all components, but R2 and R1 are no longer connected\n")),(0,a.kt)("p",null,"As with ",(0,a.kt)("inlineCode",{parentName:"p"},"remove"),", it is also possible to disconnect a list of terminals directly from the circuit."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"V1 = VoltageSource('V1')\nR1 = Resistor('R1')\nR2 = Resistor('R2')\ncircuit = ()(Ground() + V1 + R1.pos).R1.neg + R2.pos).R2.neg + Ground()\ncircuit.disconnect([circuit.R2.pos, circuit.R1.pos])\n# circuit still has all components, but R2 and R1 are no longer connected\n")),(0,a.kt)("h3",{id:"combining-subcircuits"},"Combining subcircuits"),(0,a.kt)("p",null,"You combine circuits to reuse models in multiple analyses. For example, you combined a source model with a nullor-based amplifier concept to check the transfer parameters, and later with the small signal design of the amplifier to check the dynamics."),(0,a.kt)("p",null,"You can combine circuits using the standard connection operators."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# define source circuit\nsource = Node(\"Out-\") + VoltageSource('Vs') + Resistor(\"Rs\") + Node(\"Out+\")\n\n# define amplifier circuit\namplifier = Nullor('N1').out_p + Resistor('R1') + Node('FB') + Resistor('R2')\namplifier = amplifier.nodes.FB + amplifier.N1.in_n\namplifier = amplifier.N1.out_n + Ground()\namplifier = amplifier.N1.out_p + Node(\"Out\")\namplifier = amplifier.N1.in_p + Node(\"In\")\n\n# combine circuits in testbench\ntestbench = amplifier.nodes.In + source.nodes['Out+']\ntestbench = testbench.nodes['Out-'] + Ground()\n")))}d.isMDXComponent=!0}}]);