import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFilmDto } from './dto/create-film.dto';
import { FilmDto } from './dto/film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { Film } from './entities/film.entity';
import { FilmRepository } from './film.repository';

@Injectable()
export class FilmService {
  constructor(
    private filmRepository: FilmRepository,
    @InjectMapper() private mapper: Mapper,
  ) {}
  create(createFilmDto: CreateFilmDto) {
    return 'This action adds a new film';
  }

  findAll() {
    return `This action returns all film`;
  }

  async findOne(id: number) {
    const film = await this.filmRepository.findById(id);

    if (!film) {
      throw new NotFoundException();
    }
    return this.mapper.map(film, Film, FilmDto);
  }

  update(id: number, updateFilmDto: UpdateFilmDto) {
    return `This action updates a #${id} film`;
  }

  remove(id: number) {
    return `This action removes a #${id} film`;
  }
}
