import {useEffect} from 'react';
import {useLanguage} from './LanguageContext';
import {findPtKeyFromAnyTranslation,translateContent} from './contentTranslations';

/**
 * Traduz textos renderizados pelo React e também conteúdos criados em portals
 * do MUI (Menu, Select, Drawer e Alert). Não guarda referências a textos
 * antigos: o React pode reutilizar o mesmo Text node com outro conteúdo.
 */
function translateTree(root:Node,language:ReturnType<typeof useLanguage>['language']){
  const translateNode=(textNode:Text)=>{
    const raw=textNode.data;
    const core=raw.trim();
    if(!core)return;
    const canonical=findPtKeyFromAnyTranslation(core)??core;
    const translated=translateContent(canonical,language);
    if(translated===core)return;
    const leading=raw.match(/^\s*/)?.[0]??'';
    const trailing=raw.match(/\s*$/)?.[0]??'';
    textNode.data=leading+translated+trailing;
  };

  if(root.nodeType===Node.TEXT_NODE)translateNode(root as Text);
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  let current:Node|null;
  while((current=walker.nextNode()))translateNode(current as Text);
}

export default function PageTranslator(){
  const{language}=useLanguage();
  useEffect(()=>{
    const root=document.body;
    translateTree(root,language);

    const observer=new MutationObserver(mutations=>{
      observer.disconnect();
      for(const mutation of mutations){
        if(mutation.type==='characterData')translateTree(mutation.target,language);
        mutation.addedNodes.forEach(node=>translateTree(node,language));
      }
      observer.observe(root,{childList:true,subtree:true,characterData:true});
    });
    observer.observe(root,{childList:true,subtree:true,characterData:true});
    return()=>observer.disconnect();
  },[language]);
  return null;
}
