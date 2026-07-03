#
#   make          build and publish to ../../public/resume.pdf
#   make lint     run chktex
#   make check    lint + verify public/resume.pdf is in sync with the source
#   make watch    rebuild on save (does not publish)
#   make clean    remove build artifacts
#

TEX      := resume.tex
BUILDDIR := build
OUTPDF   := $(BUILDDIR)/resume.pdf
PUBLIC   := ../../public/resume.pdf

LATEXMK  := latexmk
CHKTEX   := chktex

# Reproducible output: pin pdfTeX's embedded timestamps so a rebuild from the
# same source + same TeX distribution is byte-stable.
REPRO := SOURCE_DATE_EPOCH=0 FORCE_SOURCE_DATE=1

LATEXMK_FLAGS := -pdf -interaction=nonstopmode -halt-on-error -outdir=$(BUILDDIR)

# -I0: don't follow \input into system files (e.g. glyphtounicode).
# Suppressed warnings that are noise for this template:
#   1  command terminated with space (macro-heavy template)
#   8  dash length (phone number / intentional hyphens)
#   26 space in front of punctuation (".NET")
#   27 could not execute LaTeX command (\input{glyphtounicode})
CHKTEX_FLAGS := -q -I0 -n1 -n8 -n26 -n27

.PHONY: all publish pdf lint check verify-sync watch clean

all: publish

publish: $(PUBLIC)

pdf: $(OUTPDF)

$(OUTPDF): $(TEX)
	$(REPRO) $(LATEXMK) $(LATEXMK_FLAGS) $(TEX)

$(PUBLIC): $(OUTPDF)
	cp $(OUTPDF) $(PUBLIC)
	@echo "Published -> $(PUBLIC)"

lint:
	$(CHKTEX) $(CHKTEX_FLAGS) $(TEX)

check: lint verify-sync

# Rebuild from source and confirm the committed public/resume.pdf has the same
# text content. Compares whitespace-normalized text.
verify-sync: $(OUTPDF)
	@command -v pdftotext >/dev/null 2>&1 || { \
		echo "pdftotext (poppler-utils) is required for the sync check"; exit 1; }
	@pdftotext $(OUTPDF) - | tr -s '[:space:]' ' ' > $(BUILDDIR)/fresh.txt
	@pdftotext $(PUBLIC) - | tr -s '[:space:]' ' ' > $(BUILDDIR)/published.txt
	@if diff -q $(BUILDDIR)/published.txt $(BUILDDIR)/fresh.txt >/dev/null; then \
		echo "In sync: public/resume.pdf matches resume.tex"; \
	else \
		echo "OUT OF SYNC: public/resume.pdf does not match resume.tex."; \
		echo "Run 'pnpm resume' (or 'make -C src/resume') and commit public/resume.pdf."; \
		diff $(BUILDDIR)/published.txt $(BUILDDIR)/fresh.txt || true; \
		exit 1; \
	fi

watch:
	$(REPRO) $(LATEXMK) $(LATEXMK_FLAGS) -pvc $(TEX)

clean:
	$(LATEXMK) -C -outdir=$(BUILDDIR) $(TEX)
	rm -rf $(BUILDDIR)
