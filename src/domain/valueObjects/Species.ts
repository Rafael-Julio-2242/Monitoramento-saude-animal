class Species {
 constructor(private value: string) {
  if (value.length === 0) throw new Error('Species cannot be empty');
 }

 getValue(): string {
  return this.value;
 }
}

export {
 Species
}