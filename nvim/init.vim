set relativenumber


call plug#begin('~/.local/share/nvim/site/plugged')
Plug 'junegunn/goyo.vim'
Plug 'windwp/nvim-autopairs'
Plug 'airblade/vim-gitgutter'
Plug 'editorconfig/editorconfig-vim'
Plug 'itchyny/lightline.vim'
Plug 'junegunn/fzf'
Plug 'junegunn/fzf.vim'
Plug 'mattn/emmet-vim'
Plug 'scrooloose/nerdtree'
Plug 'terryma/vim-multiple-cursors'
Plug 'tpope/vim-eunuch'
Plug 'tpope/vim-surround'
Plug 'Alexis12119/nightly.nvim'
Plug 'jelera/vim-javascript-syntax'
Plug 'catppuccin/nvim', { 'as': 'catppuccin' }
Plug 'rose-pine/neovim', { 'as': 'rose-pine' }
Plug 'scottmckendry/cyberdream.nvim', { 'as': 'cyberdream' }
Plug 'folke/tokyonight.nvim', { 'as': 'tokyonight' }
Plug 'hrsh7th/nvim-cmp'
Plug 'ryanoasis/vim-devicons'
Plug 'Xuyuanp/nerdtree-git-plugin'
Plug 'nvim-treesitter/nvim-treesitter', {'do': ':TSUpdate'}
Plug 'windwp/nvim-ts-autotag'
call plug#end()

colorscheme tokyonight-storm 
autocmd VimEnter * NERDTree

let mapleader = " " " map leader to comma
nnoremap <leader>n :NERDTreeFocus<CR>
nnoremap <leader>t :NERDTreeToggle<CR>
nnoremap <C-r> :! npm run dev<CR>

" Exit Vim if NERDTree is the only window remaining in the only tab.
autocmd BufEnter * if tabpagenr('$') == 1 && winnr('$') == 1 && exists('b:NERDTree') && b:NERDTree.isTabTree() | call feedkeys(":quit\<CR>:\<BS>") | endif

highlight Normal guibg=none

lua << EOF
require("nvim-autopairs").setup {}


require'nvim-treesitter.configs'.setup{
	ensure_installed = {"javascript"},

	sync_install = false,


	highlight = {
		enable = true,
		additional_vim_regex_highlighting = false,
	}

}

require('nvim-ts-autotag').setup({
  opts = {
    -- Defaults
    enable_close = true, -- Auto close tags
    enable_rename = true, -- Auto rename pairs of tags
    enable_close_on_slash = false -- Auto close on trailing </
  }
})

require('cyberdream').setup({
	transparent = true
})

EOF

