import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Menu as MuiMenu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { Close, KeyboardArrowDown, LanguageOutlined, LockOutlined, Menu } from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';
import { Language, useLanguage } from '../i18n/LanguageContext';

const languageOptions: [Language, string][] = [
  ['pt-BR', 'PT-BR'],
  ['en', 'EN'],
  ['fr', 'FR'],
  ['es', 'ES'],
  ['pt-PT', 'PT-PT'],
];

export default function Navbar() {
  const [drawer, setDrawer] = useState(false);
  const [ecosystemAnchor, setEcosystemAnchor] = useState<null | HTMLElement>(null);
  const [solutionsAnchor, setSolutionsAnchor] = useState<null | HTMLElement>(null);
  const [languageAnchor, setLanguageAnchor] = useState<null | HTMLElement>(null);
  const { language, setLanguage, t } = useLanguage();

  const links = [
    [t('technology'), '/tecnologia'],
    [t('governance'), '/governanca'],
    [t('blog'), '/blog'],
    [t('contact'), '/contato'],
  ] as const;

  const solutions = [
    [t('public'), '/gestao-publica'],
    [t('epidemiology'), '/epidemiologia'],
    [t('hospitals'), '/saude-privada'],
  ] as const;

  const ecosystem = [
    ['Visão do Ecossistema', '/ecossistema'],
    ['Cluster HDI — Integração e Valor', '/cluster-hdi'],
  ] as const;

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: '#fff', color: '#111', borderBottom: '1px solid #eee' }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 5 } }}>
        <Toolbar disableGutters sx={{ height: 80 }}>
          <Box component={Link} to="/" sx={{ minWidth: { md: 285 }, flexGrow: { xs: 1, md: 0 } }}>
            <Typography sx={{ color: '#133c75', fontWeight: 800, fontSize: 20, lineHeight: 1 }}>InfoService</Typography>
            <Typography sx={{ fontSize: 10, color: '#1688e4', mt: 0.5 }}>Inteligência de dados em saúde</Typography>
          </Box>

          <Stack direction="row" spacing={0.4} sx={{ display: { xs: 'none', lg: 'flex' }, mx: 'auto' }}>
            <Button onClick={e => setEcosystemAnchor(e.currentTarget)} endIcon={<KeyboardArrowDown />} sx={{ color: '#111' }}>
              {t('ecosystem')}
            </Button>
            {links.map(([label, path]) => (
              <Button key={path} component={NavLink} to={path} sx={{ color: '#111', '&.active': { color: '#d81159' } }}>
                {label}
              </Button>
            ))}

            <Button onClick={e => setSolutionsAnchor(e.currentTarget)} endIcon={<KeyboardArrowDown />} sx={{ color: '#111' }}>
              {t('solutions')}
            </Button>
          </Stack>

          <Button onClick={e => setLanguageAnchor(e.currentTarget)} startIcon={<LanguageOutlined />} sx={{ display: { xs: 'none', md: 'flex' }, color: '#555', minWidth: 85, whiteSpace: 'nowrap' }}>
            {languageOptions.find(([value]) => value === language)?.[1]}
          </Button>

          <Button
            component="a"
            href="https://healthdatainsights.net/"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<LockOutlined />}
            variant="contained"
            sx={{ display: { xs: 'none', md: 'flex' }, bgcolor: '#111', color: '#fff', ml: 1, whiteSpace: 'nowrap' }}
          >
            {t('restricted')}
          </Button>

          <IconButton onClick={() => setDrawer(true)} sx={{ display: { md: 'none' } }}>
            <Menu />
          </IconButton>
        </Toolbar>
      </Container>

      <MuiMenu anchorEl={solutionsAnchor} open={Boolean(solutionsAnchor)} onClose={() => setSolutionsAnchor(null)}>
        {solutions.map(([label, path]) => (
          <MenuItem key={String(path)} component={Link} to={String(path)} onClick={() => setSolutionsAnchor(null)}>
            {label}
          </MenuItem>
        ))}
      </MuiMenu>

      <MuiMenu anchorEl={ecosystemAnchor} open={Boolean(ecosystemAnchor)} onClose={() => setEcosystemAnchor(null)}>
        {ecosystem.map(([label, path]) => (
          <MenuItem key={path} component={Link} to={path} onClick={() => setEcosystemAnchor(null)}>
            {label}
          </MenuItem>
        ))}
      </MuiMenu>

      <MuiMenu anchorEl={languageAnchor} open={Boolean(languageAnchor)} onClose={() => setLanguageAnchor(null)}>
        {languageOptions.map(([value, label]) => (
          <MenuItem
            key={value}
            selected={language === value}
            onClick={() => {
              setLanguage(value);
              setLanguageAnchor(null);
            }}
          >
            {label}
          </MenuItem>
        ))}
      </MuiMenu>

      <Drawer anchor="right" open={drawer} onClose={() => setDrawer(false)}>
        <Box sx={{ width: 320, p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={() => setDrawer(false)}>
              <Close />
            </IconButton>
          </Box>

          <Stack spacing={1} sx={{ mt: 1 }}>
            <Box sx={{ borderBottom: '1px solid #eee', pb: 1 }}>
              <Typography sx={{ fontSize: 12, color: '#666', px: 1, pb: 1 }}>{t('ecosystem')}</Typography>
              {ecosystem.map(([label, path]) => (
                <Button key={path} component={Link} to={path} onClick={() => setDrawer(false)} sx={{ justifyContent: 'flex-start', width: '100%' }}>
                  {label}
                </Button>
              ))}
            </Box>
            {links.map(([label, path]) => (
              <Button key={String(path)} component={Link} to={String(path)} onClick={() => setDrawer(false)} sx={{ justifyContent: 'flex-start' }}>
                {label}
              </Button>
            ))}

            <Box sx={{ borderTop: '1px solid #eee', pt: 1 }}>
              {solutions.map(([label, path]) => (
                <Button key={String(path)} component={Link} to={String(path)} onClick={() => setDrawer(false)} sx={{ justifyContent: 'flex-start' }}>
                  {label}
                </Button>
              ))}
            </Box>

            <Box sx={{ borderTop: '1px solid #eee', pt: 1 }}>
              <Typography sx={{ fontSize: 12, color: '#666', px: 1, pb: 1 }}>Idioma</Typography>
              {languageOptions.map(([value, label]) => (
                <Button
                  key={value}
                  onClick={() => {
                    setLanguage(value);
                    setDrawer(false);
                  }}
                  sx={{ justifyContent: 'flex-start' }}
                  variant={language === value ? 'contained' : 'text'}
                >
                  {label}
                </Button>
              ))}
            </Box>

            <Box sx={{ borderTop: '1px solid #eee', pt: 1 }}>
              <Button
                component="a"
                href="https://healthdatainsights.net/"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<LockOutlined />}
                variant="contained"
                sx={{ bgcolor: '#111', color: '#fff', whiteSpace: 'nowrap' }}
              >
                {t('restricted')}
              </Button>
            </Box>
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  );
}
