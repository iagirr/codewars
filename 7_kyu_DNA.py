def DNA_strand(dna):
    reverse = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'}
    make_reverse = ''.join(reverse[l] for l in dna)
    return make_reverse

print(DNA_strand("ATTGCC"))
print(DNA_strand("GTAT"))
